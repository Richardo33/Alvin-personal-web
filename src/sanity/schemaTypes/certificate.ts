import { defineField, defineType } from "sanity";

export const certificateType = defineType({
  name: "certificate",
  title: "Certificates",
  type: "document",
  fields: [
    defineField({
      name: "certificateType",
      title: "Certificate type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Certificate name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Certificate photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "file",
      title: "Certificate PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
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
      title: "title",
      subtitle: "certificateType",
      media: "image",
    },
  },
});
