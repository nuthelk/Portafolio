import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portafolio',
  projectId: 'hli8j4b3',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
