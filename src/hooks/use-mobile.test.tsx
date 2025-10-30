import { renderHook } from '@testing-library/react';
import { useIsMobile } from './use-mobile';

function mockMatchMedia(width: number) {
  // mock matchMedia and innerWidth
  // jsdom doesn't implement matchMedia, so provide a simple polyfill.
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  window.matchMedia = (query: string) => {
    const listeners: Function[] = [];
    const mql = {
      matches: window.innerWidth < 768,
      media: query,
      addEventListener: (_: string, cb: () => void) => {
        listeners.push(cb);
      },
      removeEventListener: (_: string, cb: () => void) => {
        const idx = listeners.indexOf(cb);
        if (idx !== -1) listeners.splice(idx, 1);
      },
      dispatch: () => {
        for (const l of listeners) l();
      },
    } as any;
    return mql;
  };
}

describe('useIsMobile', () => {
  it('returns true when width < MOBILE_BREAKPOINT', () => {
    mockMatchMedia(500);
    const { result } = renderHook(() => useIsMobile());
    // initial effect runs asynchronously; flush microtasks
    expect(result.current).toBe(true);
  });

  it('returns false when width >= MOBILE_BREAKPOINT', () => {
    mockMatchMedia(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });
});
