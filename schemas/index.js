// Single Types
import global, { global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'

export const singleTypes = [
  homepage,
]

// Collection Types

export const collectionTypes = [

]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import titleAndDescription from './components/titleAndDescription'

export const components = [
  cta,
  seo,
  titleAndDescription,
]

export const schemaTypes = [
  // Single Types
  global,
  global_Seo,

  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]