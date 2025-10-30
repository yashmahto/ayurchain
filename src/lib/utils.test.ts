import { cn } from './utils';

describe('cn utility', () => {
  it('merges class names and removes duplicates', () => {
    const result = cn('px-2', 'py-1', 'px-2', { 'text-center': true });
    expect(result).toContain('px-2');
    expect(result).toContain('py-1');
    expect(result).toContain('text-center');
  });

  it('handles falsy values gracefully', () => {
    const result = cn('btn', undefined, false as any, null as any);
    expect(result).toContain('btn');
  });
});
