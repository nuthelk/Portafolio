import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "tittle",
      title: "tittle",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "string",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],

})
