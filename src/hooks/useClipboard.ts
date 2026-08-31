import { useState, useCallback, useRef, useEffect } from 'react';

type ClipboardStatus = 'idle' | 'copied' | 'error';

interface UseClipboardReturn {
  status: ClipboardStatus;
  copyToClipboard: (text: string) => void;
}

/**
 * Hook for copy-to-clipboard with idle/copied/error state machine.
 * Auto-reverts to 'idle' after 2000ms on success or error.
 * Falls back to document.execCommand('copy') if navigator.clipboard is unavailable.
 */
export function useClipboard(): UseClipboardReturn {
  const [status, setStatus] = useState<ClipboardStatus>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scheduleRevert = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setStatus('idle');
      timeoutRef.current = null;
    }, 2000);
  }, []);

  const fallbackCopy = useCallback((text: string): boolean => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  }, []);

  const copyToClipboard = useCallback(
    (text: string) => {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setStatus('copied');
            scheduleRevert();
          })
          .catch(() => {
            setStatus('error');
            scheduleRevert();
          });
      } else {
        // Fallback for older browsers
        const success = fallbackCopy(text);
        if (success) {
          setStatus('copied');
        } else {
          setStatus('error');
        }
        scheduleRevert();
      }
    },
    [scheduleRevert, fallbackCopy]
  );

  return { status, copyToClipboard };
}
