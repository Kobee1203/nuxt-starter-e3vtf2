import { describe, beforeEach, afterEach, test, expect, vi } from 'vitest';
import { cache } from '~~/server/lib/caching/cache-manager';

describe('My test', () => {
  test('my test', () => {
    const result1 = cache('mykey', () => 3);
    const result2 = cache('mykey', () => 3);
  });
});
