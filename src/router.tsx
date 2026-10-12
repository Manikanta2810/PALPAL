import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Extract normalized path (e.g. 'home', 'library', 'library/Startups', 'c/monty', 'dashboard', 'profile', 'start', 'interests')
export function getCurrentPath(): string {
  // Seamless migration: if user visited with a legacy hash URL (#/library, #/c/monty), convert cleanly to real pathname
  if (typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
    const hashSub = window.location.hash.slice(2);
    const targetUrl = hashSub ? `/${hashSub}` : '/';
    window.history.replaceState(null, '', targetUrl);
    return hashSub || 'home';
  }

  if (typeof window === 'undefined') return 'home';

  const pathname = window.location.pathname;
  if (!pathname || pathname === '/' || pathname === '/index.html') {
    return 'home';
  }

  // Remove leading and trailing slashes
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  return clean || 'home';
}

interface RouterContextType {
  path: string;
  navigate: (to: string, replace?: boolean) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: 'home',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => getCurrentPath());

  useEffect(() => {
    const handlePopState = () => {
      setPath(getCurrentPath());
      window.scrollTo(0, 0);
    };

    const handleHashChange = () => {
      setPath(getCurrentPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = useCallback((to: string, replace = false) => {
    let cleanTarget = to;
    if (cleanTarget.startsWith('#/')) {
      cleanTarget = cleanTarget.slice(2);
    }
    if (!cleanTarget.startsWith('/')) {
      cleanTarget = `/${cleanTarget}`;
    }
    if (cleanTarget === '/home') {
      cleanTarget = '/';
    }

    if (replace) {
      window.history.replaceState(null, '', cleanTarget);
    } else {
      window.history.pushState(null, '', cleanTarget);
    }

    const nextPath = cleanTarget === '/' ? 'home' : cleanTarget.replace(/^\/+|\/+$/g, '');
    setPath((prev) => (prev === nextPath ? prev : nextPath));
    window.scrollTo(0, 0);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, replace, onClick, children, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Let user open in new tab via middle-click or Cmd/Ctrl/Shift/Alt + click
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }

    e.preventDefault();
    navigate(to, replace);
  };

  const href = to.startsWith('/') ? to : `/${to.replace(/^#\//, '')}`;

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
