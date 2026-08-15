import assert from 'node:assert/strict';
import test from 'node:test';
import { summarize } from '../src/api/statistics.js';

test('summarize returns the baseline statistics', () => {
  assert.deepEqual(summarize([2, 4, 9]), {
    count: 3,
    min: 2,
    max: 9,
    average: 5
  });
});

test('summarize handles an empty sample', () => {
  assert.deepEqual(summarize([]), {
    count: 0,
    min: null,
    max: null,
    average: null
  });
});

test('summarize rejects non-finite values', () => {
  assert.throws(() => summarize([1, Number.NaN]), TypeError);
});
