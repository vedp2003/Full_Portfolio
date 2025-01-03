import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Programming Languages", value: "programming-languages" },
          { title: "Web Development", value: "web-development" },
          { title: "Database/Content Management", value: "database-cms" },
          { title: "Mobile Development", value: "mobile-development" },
          { title: "Version Control", value: "version-control" },
          { title: "Cloud Computing", value: "cloud-computing" },
          { title: "Machine Learning/AI", value: "machine-learning-ai" },
          { title: "Productivity Tools", value: "productivity-tools" },
          { title: "Design Tools", value: "design-tools" },
        ],
      },
    }),
    defineField({
      name: "icon",
      title: "Skill Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
