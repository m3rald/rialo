// This is a dummy polyfill to prevent cross-fetch from trying to overwrite window.fetch
// in environments where window.fetch is read-only.
const fetch = typeof window !== 'undefined' ? window.fetch : undefined;
export default fetch;
export { fetch };
