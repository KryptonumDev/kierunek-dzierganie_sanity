// Single Types
import global, { global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'

export const singleTypes = [
  homepage,
]

// Collection Types
import landingPage from './collectionTypes/landingPage'

export const collectionTypes = [
  landingPage,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import titleAndDescription from './components/titleAndDescription'
import Faq from './components/Faq'
import Opinions, { Opinions_List } from './components/Opinions'
import TileList from './components/TileList'
import CtaSection from './components/CtaSection'
import SimpleCtaSection from './components/SimpleCtaSection'
import HeroBackgroundImg from './components/HeroBackgroundImg'
import Benefits from './components/Benefits'

export const schemaTypes = [
  // Single Types
  global,
  global_Seo,
  cta,
  seo,
  titleAndDescription,
  Opinions,
  Opinions_List,
  Faq,
  TileList,
  CtaSection,
  SimpleCtaSection,
  HeroBackgroundImg,
  Benefits,


  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
]