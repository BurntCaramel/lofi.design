// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/open-source": { page: "/open-source" },
      "/syntax": { page: "/syntax" },
      "/syntax/advanced": { page: "/syntax/advanced" },
    }
  },
}