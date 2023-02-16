import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: "tittle",
      title: "tittle",
      description: "platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    
  ],

})
