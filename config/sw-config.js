module.exports = {
  cache: {
    cacheId: "CyberRange",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "CyberRange",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
