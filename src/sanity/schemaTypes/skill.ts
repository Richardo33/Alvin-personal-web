import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Frontend",
          "Backend & Data",
          "Delivery & Analytics",
          "Other",
        ],
      },
      initialValue: "Frontend",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "icon",
    },
  },
});
