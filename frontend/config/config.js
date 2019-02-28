export default {
  // if singular is false, directories should
  //  be named as models and pages
  singular: false,
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],

  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/",
          component: "customer"
        },
        {
          path: "/note",
          component: "note"
        },
        {
          path: "/customers",
          component: "customer"
        },
        {
          path: "/dashboard",
          routes: [
            { path: "/dashboard/analysis", component: "Dashboard/Analysis" },
            { path: "/dashboard/monitor", component: "Dashboard/Monitor" },
            { path: "/dashboard/workplace", component: "Dashboard/Workplace" }
          ]
        }
      ]
    }
  ]
};
