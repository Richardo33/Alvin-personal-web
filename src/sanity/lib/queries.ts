import { defineQuery } from "next-sanity";

export const portfolioQuery = defineQuery(`{
  "profile": *[_type == "profile"][0]{
    name,
    firstName,
    role,
    bio,
    location,
    available,
    availabilityText,
    summary,
    about,
    aboutList,
    email,
    phone,
    whatsapp,
    github,
    linkedin,
    instagram,
    "cv": coalesce(cvFile.asset->url, cvUrl),
    "profileImage": profileImage.asset->url
  },
  "projects": *[_type == "project"] | order(order asc, name asc){
    "title": name,
    "eyebrow": shortDetail,
    description,
    "impact": goals,
    "image": image.asset->url,
    "tech": techStack,
    githubUrl,
    "demoUrl": liveDemoUrl
  },
  "skills": *[_type == "skill"] | order(category asc, order asc, name asc){
    name,
    category,
    "image": icon.asset->url
  },
  "experiences": *[_type == "experience"] | order(order asc, period desc){
    role,
    company,
    location,
    period,
    "highlights": responsibilities,
    "stack": skills,
    "logo": logo.asset->url
  },
  "certificates": *[_type == "certificate"] | order(order asc, title asc){
    title,
    "issuer": certificateType,
    "certificateType": certificateType,
    "note": shortDescription,
    "image": image.asset->url,
    "fileUrl": file.asset->url
  }
}`);
