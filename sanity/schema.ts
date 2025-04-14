import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import heroContent from './schemaTypes/heroContent'
import recent from './schemaTypes/recent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroContent, post, recent, author, category, blockContent],
}
