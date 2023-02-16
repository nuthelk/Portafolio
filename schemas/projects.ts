import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: "tittle",
      title: "tittle",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type:"reference", to: {type: "skill"}}],
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    {
      name: "linkToGithub",
      title: "LinkToGithub",
      type: "url",
    },
    
    
  ],

})
