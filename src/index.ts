function setThemeColorMeta(dartOrColor: boolean | string) {
  if (typeof window === 'undefined') return;
  try {
    const meats = document.getElementsByTagName('meta') as unknown as Record<
      string,
      HTMLMetaElement
    >;
    let themeMeta = meats['theme-color'];
    if (!themeMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
      themeMeta = meta;
    }
    if (typeof dartOrColor === 'string') {
      themeMeta.setAttribute('content', dartOrColor);
      return;
    }
    themeMeta.setAttribute(
      'content',
      dartOrColor ? 'rgba(0,0,0,0.65)' : '#1890ff',
    );
  } catch (error) {}
}

export { setThemeColorMeta };
