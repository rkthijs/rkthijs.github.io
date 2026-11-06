(() => {
  const storageKey = 'kozma-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const colors = { light: '#faf9f6', dark: '#14171c' };
  const validPreference = value => value === 'light' || value === 'dark' ? value : null;
  let preference = null;

  try {
    preference = validPreference(localStorage.getItem(storageKey));
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  const preferredTheme = () => preference || (systemTheme.matches ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = colors[theme];

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
      toggle.hidden = false;
    }
  }

  // This script runs before the stylesheet to avoid a flash of the wrong theme.
  applyTheme(preferredTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(preferredTheme());
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the user's selection for this page when saving is blocked.
      }
      applyTheme(preference);
    });
  });

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme(preferredTheme());
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      preference = validPreference(event.newValue);
      applyTheme(preferredTheme());
    }
  });
})();
