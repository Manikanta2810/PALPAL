import React from 'react';

export interface ActivityHistory {
  [date: string]: number; // 'YYYY-MM-DD' -> count of mastered concepts
}

export const getTodayDate = (): string => new Date().toISOString().slice(0, 10);

export const getYesterdayDate = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

export function getActiveStreak(streak?: number, lastActiveDate?: string): number {
  if (!lastActiveDate || !streak) return 0;
  const today = getTodayDate();
  const yesterday = getYesterdayDate();

  if (lastActiveDate === today || lastActiveDate === yesterday) {
    return streak;
  }
  return 0; // Missed yesterday, streak lapsed
}

export function updateStreakOnMastery(
  currentStreak = 0,
  currentBestStreak = 0,
  lastActiveDate?: string,
  history: ActivityHistory = {}
): {
  streak: number;
  bestStreak: number;
  lastActiveDate: string;
  history: ActivityHistory;
} {
  const today = getTodayDate();
  const yesterday = getYesterdayDate();

  const nextHistory: ActivityHistory = { ...history };
  nextHistory[today] = (nextHistory[today] || 0) + 1;

  let nextStreak = currentStreak;

  if (lastActiveDate === today) {
    // Already active today; streak stays maintained (minimum 1)
    if (nextStreak === 0) nextStreak = 1;
  } else if (lastActiveDate === yesterday) {
    // Consecutive day activity!
    nextStreak = currentStreak + 1;
  } else {
    // Missed a day or first day ever
    nextStreak = 1;
  }

  const nextBest = Math.max(currentBestStreak, nextStreak);

  return {
    streak: nextStreak,
    bestStreak: nextBest,
    lastActiveDate: today,
    history: nextHistory,
  };
}

interface ActivityTrackerProps {
  streak?: number;
  bestStreak?: number;
  lastActiveDate?: string;
  history?: ActivityHistory;
  target?: string;
}

export const ActivityTracker: React.FC<ActivityTrackerProps> = ({
  streak = 0,
  bestStreak = 0,
  lastActiveDate,
  history = {},
  target = '3 concepts / day',
}) => {
  const activeStreak = getActiveStreak(streak, lastActiveDate);
  const highestStreak = Math.max(bestStreak, activeStreak);
  const today = getTodayDate();

  // Parse target number (e.g. "3 concepts / day (Standard)" -> 3)
  const targetNum = parseInt(target, 10) || 3;
  const todayCount = history[today] || 0;
  const goalProgress = Math.min(100, Math.round((todayCount / targetNum) * 100));
  const goalMet = todayCount >= targetNum;

  // Generate 14-day history window
  const days: { date: string; label: string; dayName: string; count: number; isToday: boolean }[] = [];
  const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const count = history[dateStr] || 0;
    days.push({
      date: dateStr,
      label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      dayName: DAY_LABELS[d.getDay()],
      count,
      isToday: dateStr === today,
    });
  }

  const activeDaysCount = days.filter((d) => d.count > 0).length;

  return (
    <div className="panel activity-tracker">
      <div className="activity-header">
        <div className="streak-main">
          <div className={`streak-flame-box ${activeStreak > 0 ? 'lit' : ''}`}>
            <span className="streak-flame">{activeStreak > 0 ? '🔥' : '⚡'}</span>
          </div>
          <div>
            <div className="streak-title">
              {activeStreak > 0 ? `${activeStreak} Day Streak` : '0 Day Streak'}
            </div>
            <div className="m mu streak-subtitle">
              {highestStreak > 0 ? `Best: ${highestStreak} days` : 'Master a concept to start'} · {activeDaysCount}/14 active days
            </div>
          </div>
        </div>

        <div className="daily-goal-box">
          <div className="row m">
            <span className="mu">Daily Rhythm</span>
            <span style={{ fontWeight: 800, color: goalMet ? 'var(--ac)' : 'inherit' }}>
              {todayCount} / {targetNum} concepts
            </span>
          </div>
          <div className="bar" style={{ marginTop: 6, height: 8 }}>
            <i
              style={{
                width: `${goalProgress}%`,
                background: goalMet ? 'var(--ac)' : 'var(--ink)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {goalMet && (
        <div className="goal-banner m">
          🎯 Daily target hit! Your streak is secured for today.
        </div>
      )}

      {/* 14-Day Activity Heatmap Strip */}
      <div className="rhythm-section">
        <div className="row m mu" style={{ marginBottom: 10 }}>
          <span>14-Day Activity Rhythm</span>
          <span>{todayCount > 0 ? `${todayCount} mastered today` : 'No activity yet today'}</span>
        </div>
        <div className="rhythm-strip">
          {days.map((day) => {
            const hasActivity = day.count > 0;
            const hitTarget = day.count >= targetNum;

            return (
              <div
                key={day.date}
                className={`rhythm-col ${day.isToday ? 'is-today' : ''}`}
                title={`${day.label}: ${day.count} concepts`}
              >
                <div
                  className={`rhythm-cell ${
                    hitTarget ? 'cell-goal' : hasActivity ? 'cell-active' : 'cell-empty'
                  }`}
                >
                  {hasActivity ? (hitTarget ? '★' : day.count) : ''}
                </div>
                <span className="rhythm-day-label m">{day.dayName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
