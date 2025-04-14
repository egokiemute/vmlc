import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "titleOne",
      title: "Title One",
      type: "string",
    }),
    defineField({
      name: "titleTwo",
      title: "Title Two",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "btnText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "mediaType",
      title: "mediaType",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "titleOne",
    },
  },
});
