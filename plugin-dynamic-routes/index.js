module.exports = function pluginDynamicRoutes(context, options) {
  return {
    name: "plugin-dynamic-routes",
    async contentLoaded({ actions }) {
      const { addRoute } = actions;

      options.routes.forEach(route => {
        addRoute({
          path: route.path,
          component: route.component,
          exact: route.exact ?? true,
        });
      });
    },
  };
};
