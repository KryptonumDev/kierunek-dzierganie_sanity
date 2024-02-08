// Single Types
import global, {global_Seo, nav_Link, nav_Links} from './singleTypes/global'
import homepage from './singleTypes/homepage'
import AboutMe_Page from './singleTypes/AboutMe_Page'
import Contact_Page from './singleTypes/Contact_Page'
import Knitting_Page from './singleTypes/Knitting_Page'

export const singleTypes = [homepage, AboutMe_Page, Contact_Page, Knitting_Page]

// Collection Types
import landingPage from './collectionTypes/landingPage'
import ReviewCollection from './collectionTypes/ReviewCollection'
import FaqCollection from './collectionTypes/FaqCollection'
import product from './collectionTypes/product'
import lesson from './collectionTypes/lesson'
import course from './collectionTypes/course'
import productCategory from './collectionTypes/ProductCategories'

export const collectionTypes = [
  landingPage,
  product,
  lesson,
  course,
  ReviewCollection,
  FaqCollection,
  productCategory
]

// Components
import cta from './components/cta'
import seo from './components/seo'
import titleAndDescription from './components/titleAndDescription'
import Faq from './components/Faq'
import Opinions, {Opinions_List} from './components/Opinions'
import TileList from './components/TileList'
import CtaSection from './components/CtaSection'
import SimpleCtaSection from './components/SimpleCtaSection'
import HeroBackgroundImg from './components/HeroBackgroundImg'
import Benefits from './components/Benefits'
import CourseModules from './components/CourseModules'
import ImageShowcase from './components/ImageShowcase'
import Bonuses from './components/Bonuses'
import TilesGrid, {TilesGrid_Item} from './components/TilesGrid'
import Content from '../components/Content'
import TilesSticky, {TilesSticky_Item} from './components/TilesSticky'
import TilesFeatures, {TilesFeatures_Item} from './components/TilesFeatures'
import Community from './components/Community'
import ChapterList from './components/ChaptersList'
import Reviews from './components/Reviews'
import Introduction from './components/Introduction'
import ContactForm from './components/ContactForm'
import TabSection, {TabSection_Item} from './components/TabSection'
import productVariant from './components/productVariant'
import productParameters from './components/productParameters'

export const schemaTypes = [
  ...singleTypes,
  ...collectionTypes,

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
  TilesFeatures,
  TilesFeatures_Item,
  Community,
  Content,
  ChapterList,
  Reviews,
  Introduction,
  ContactForm,
  TabSection,
  TabSection_Item,
  productVariant,
  productParameters
]
