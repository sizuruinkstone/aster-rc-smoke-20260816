export function summarize(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }
  if (values.length === 0) {
    return { count: 0, min: null, max: null, average: null };
  }
  if (!values.every(Number.isFinite)) {
    throw new TypeError('values must contain only finite numbers');
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return {
    count: values.length,
    min: Math.min(...values),
    max: Math.max(...values),
    average: total / values.length
  };
}
