export function track(action, params = {}) {
  if (typeof gtag !== 'undefined') {
    try { gtag('event', action, params); } catch (e) { /* ignore */ }
  }
}
