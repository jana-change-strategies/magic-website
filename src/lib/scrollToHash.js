/**
 * The browser tries to scroll to a URL hash before React has mounted the
 * target section (these are client-rendered pages), so the native
 * jump-to-anchor on initial load silently does nothing. Call this once
 * after the root render to finish that scroll manually. scroll-margin-top
 * (see global.css) handles the sticky-header offset.
 */
export function scrollToHashOnLoad() {
  if (!window.location.hash) return;
  const target = window.location.hash;

  const scrollNow = () => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView();
  };

  // React's initial commit isn't guaranteed synchronous, so poll briefly
  // rather than assuming the target section exists on the next frame.
  let attempts = 0;
  const tryScroll = () => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView();
      // Web fonts swapping in (and any late image decode) can still reflow
      // the page after this first pass, leaving the target's position
      // stale — correct once more after fonts settle and once more on load.
      if (document.fonts?.ready) document.fonts.ready.then(scrollNow);
      window.addEventListener('load', scrollNow, { once: true });
      return;
    }
    attempts += 1;
    if (attempts < 60) requestAnimationFrame(tryScroll);
  };
  requestAnimationFrame(tryScroll);
}
