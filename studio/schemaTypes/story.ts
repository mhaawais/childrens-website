import { defineType, defineField } from "sanity";
import CategoryIdInput from "../../app/components/categoryid"
import GlobalIdInput from "../../app/components/globalid";

export default defineType({
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    defineField({
      name: "ageGroups",
      title: "Age Groups",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "categoryId",
      title: "Category ID",
      type: "number",
      description: "Unique ID within its age category",
      components: {
        input: CategoryIdInput, // Auto-generates based on age group selection
      },
    }),
    defineField({
      name: "globalId",
      title: "Global ID",
      type: "number",
      description: "Unique ID across all stories",
      components: {
        input: GlobalIdInput, // Auto-generates as a unique global counter
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required().min(17).max(500),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
