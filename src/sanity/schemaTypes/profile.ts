import { defineField, defineType } from "sanity";

import { profile, strengths } from "../../lib/portfolio-data";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  initialValue: {
    _id: "profile",
    name: profile.name,
    firstName: profile.firstName,
    role: profile.role,
    bio: profile.bio,
    location: profile.location,
    available: profile.available,
    availabilityText: profile.availability,
    summary: profile.summary,
    about: profile.about,
    aboutList: strengths,
    email: profile.email,
    phone: profile.phone,
    whatsapp: profile.whatsapp,
    github: profile.github,
    linkedin: profile.linkedin,
    instagram: profile.instagram,
    cvUrl: profile.cv,
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstName",
      title: "First name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "profileImage",
      title: "Profile photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "availabilityText",
      title: "Availability text",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "About summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "aboutList",
      title: "About list",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cvFile",
      title: "CV file",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "cvUrl",
      title: "CV URL",
      type: "url",
      description: "Dipakai kalau CV masih disimpan di Google Drive atau link lain.",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "WhatsApp display number",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp link",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "profileImage",
    },
  },
});
