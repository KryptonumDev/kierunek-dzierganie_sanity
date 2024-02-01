// Single Types
import global, { global_Seo, nav_Link, nav_Links } from './singleTypes/global'
import homepage from './singleTypes/homepage'

export const singleTypes = [
  homepage,
]

// Collection Types
import landingPage from './collectionTypes/landingPage'

export const collectionTypes = [
  landingPage,
]

// Components
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
import CourseModules from './components/CourseModules'
import ImageShowcase from './components/ImageShowcase'
import Bonuses from './components/Bonuses'
import TilesGrid, { TilesGrid_Item } from './components/TilesGrid'
import Content from '../components/Content'
import TilesSticky, { TilesSticky_Item } from './components/TilesSticky'

export const schemaTypes = [
  // Single Types
  global,
  global_Seo,
  nav_Link,
  nav_Links,
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
  CourseModules,
  ImageShowcase,
  Bonuses,
  TilesGrid,
  TilesGrid_Item,
  TilesSticky,
  TilesSticky_Item,
  Content,


  // Restructuring
  ...singleTypes,
  ...collectionTypes,
]