// Production Serverless API Route for Vercel / Netlify / Node
// Dispatches 6-digit verification code and magic link via Resend API

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch {
        // payload remains as is
      }
    }

    const { email, code, magicUrl, type } = payload || {};

    if (!email || !code) {
      return res.status(400).json({ error: 'Email and verification code are required' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.EMAIL_FROM || 'BoringBros <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.warn('[BoringBros Auth] RESEND_API_KEY not configured.');
      return res.status(200).json({
        success: true,
        hasResendKey: false,
        message: 'RESEND_API_KEY not provided in environment'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [email],
        subject: `Your BoringBros verification code: ${code}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 28px; border: 1.5px solid #0B0B0C; border-radius: 16px; background-color: #F3F0E8; color: #0B0B0C;">
            <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #B45309; margin-bottom: 8px;">BORINGBROS AUTH</div>
            <h2 style="margin: 0 0 12px; font-size: 24px; font-weight: 800; color: #0B0B0C;">Your Sign-In Verification Code</h2>
            <p style="font-size: 15px; line-height: 1.5; color: #5f5c55; margin-bottom: 24px;">Enter the 6-digit code below to access your BoringBros account, notes, and learning streak:</p>
            
            <div style="font-family: monospace; font-size: 34px; font-weight: 800; letter-spacing: 6px; padding: 18px 24px; background: #FFFFFF; border: 2px solid #0B0B0C; border-radius: 12px; text-align: center; color: #0B0B0C; margin-bottom: 24px;">
              ${code}
            </div>
            
            ${magicUrl ? `
              <div style="text-align: center; margin-bottom: 24px;">
                <a href="${magicUrl}" style="display: inline-block; padding: 12px 24px; background: #FCAC04; color: #0B0B0C; font-weight: 800; text-decoration: none; border-radius: 8px; font-size: 14px; border: 1.5px solid #0B0B0C;">
                  Sign In with 1-Click Magic Link →
                </a>
              </div>
            ` : ''}

            <div style="border-top: 1px solid #DCD8CC; padding-top: 16px; font-size: 12px; color: #5f5c55; line-height: 1.4;">
              This code will expire in 10 minutes. If you did not request this email, no further action is required.
            </div>
          </div>
        `
      })
    });

    const data = await response.json();
    return res.status(200).json({
      success: true,
      hasResendKey: true,
      resend: data
    });
  } catch (error: any) {
    console.error('Email dispatch error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
