export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "619425e1467bab1ea97d349b",
                  title: "Sanity Studio",
                  name: "amg-properties-studio",
                  apiId: "63334f0c-ec43-46b1-b189-d5a57523f8cf",
                },
                {
                  buildHookId: "619425e1dc3f861c5f21a914",
                  title: "Blog Website",
                  name: "amg-properties",
                  apiId: "128f725c-102a-40ff-bee2-a039860ce83e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/amg-properties",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://amg-properties.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
