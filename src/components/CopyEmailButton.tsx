import { useClipboard } from '../hooks/useClipboard';

interface CopyEmailButtonProps {
  /** Email address to copy to clipboard */
  email: string;
}

/**
 * CopyEmailButton — displays an email address that can be copied to clipboard on click.
 * Shows "Copied!" feedback on success and "Failed to copy" on error, reverting after 2s.
 *
 * Placeholder implementation — will be fully fleshed out in task 10.1.
 */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const { status, copyToClipboard } = useClipboard();

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(email)}
      className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/80 text-sm
        hover:bg-white/15 hover:border-white/30 transition-colors duration-300
        min-h-[44px] min-w-[44px] cursor-pointer"
      aria-label={status === 'copied' ? 'Email copied to clipboard' : `Copy email ${email}`}
    >
      {status === 'idle' && email}
      {status === 'copied' && '✓ Copied!'}
      {status === 'error' && '✗ Failed to copy'}
    </button>
  );
}
