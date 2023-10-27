// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    category: collection({
      label: "Category",
      slugField: "title",
      path: "src/category/*",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Maindec: fields.text({
          label: "Main Describe",
          multiline: true,
        }),
        message: fields.text({
          label: "Message",
          multiline: true,
        }),
        dec: fields.text({
          label: "Describe",
          multiline: true,
        }),
        Desktop: fields.image({
          label: "Desktop Image",
          description: "Select image for category",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/",
          publicPath: "/desktop/category/",
        }),
        list: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            details: fields.text({ label: "details", multiline: true }),
            draft: fields.checkbox({
              label: "Draft",
              description:
                "Set this post as draft to prevent it from being published",
            }),
          }),
          {
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        parah: fields.text({
          label: "Parah",
          multiline: true,
        }),
      },
    }),
  },
});
