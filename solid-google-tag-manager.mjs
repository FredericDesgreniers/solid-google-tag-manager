function createGoogleTagManagerElement(tag) {
  return createScriptLoader({
    src: `https://www.googletagmanager.com/gtag/js?id=${tag}`,
    async onLoad() {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", tag);
    },
  });
}

export { createGoogleTagManagerElement };
