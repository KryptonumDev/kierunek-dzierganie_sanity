// Single Types
import global, { global_OrganizationSchema, global_Seo, nav_Link, nav_Links } from './singleTypes/global';
import homepage from './singleTypes/homepage';
import Knitting_Page from './singleTypes/Knitting_Page';
import Crocheting_Page from './singleTypes/Crocheting_Page';
import AboutMe_Page from './singleTypes/AboutMe_Page';
import Contact_Page from './singleTypes/Contact_Page';
import Partners_Page from './singleTypes/Partners_Page';
import Cooperation_Page from './singleTypes/Cooperation_Page';
import Affiliate_Page from './singleTypes/Affiliate_Page';
import Newsletter_Page from './singleTypes/Newsletter_Page';
import WhyBrand_Page from './singleTypes/WhyBrand_Page';
import NotFound_Page from './singleTypes/NotFound_Page';
import Statute_Page, { Statute_Page_Content } from './singleTypes/Statute_Page';
import PrivacyPolicy_Page, { Privacy_Policy_Page_Content } from './singleTypes/PrivacyPolicy_Page'
import Blog_Page from './singleTypes/Blog_Page';
import Cart from './singleTypes/Cart';
import Logout_Page from './singleTypes/dashboard/Logout_Page';

export const singleTypes = [
  homepage,
  Knitting_Page,
  Crocheting_Page,
  AboutMe_Page,
  Contact_Page,
  Partners_Page,
  Cooperation_Page,
  Affiliate_Page,
  Newsletter_Page,
  WhyBrand_Page,
  NotFound_Page,
  PrivacyPolicy_Page,
  Statute_Page,
  Blog_Page,
  Cart
];

// Collection Types
import landingPage from './collectionTypes/landingPage';
import ReviewCollection from './collectionTypes/ReviewCollection';
import FaqCollection from './collectionTypes/FaqCollection';
import product from './collectionTypes/product';
import lesson from './collectionTypes/lesson';
import course from './collectionTypes/course';
import productCategory from './collectionTypes/ProductCategories';
import CustomerCaseStudy_Collection from './collectionTypes/CustomerCaseStudy_Collection';
import Partner_Collection from './collectionTypes/Partner_Collection';
import BlogCategory_Collection from './collectionTypes/BlogCategory_Collection';
import Author_Collection from './collectionTypes/Author_Collection';
import BlogPost_Collection from './collectionTypes/BlogPost_Collection';

export const collectionTypes = [
  landingPage,
  product,
  lesson,
  course,
  ReviewCollection,
  FaqCollection,
  productCategory,
  CustomerCaseStudy_Collection,
  Partner_Collection,
  BlogCategory_Collection,
  Author_Collection,
  BlogPost_Collection,
];

// Components
import cta from './components/cta';
import seo from './components/seo';
import titleAndDescription from './components/titleAndDescription';
import Faq from './components/Faq';
import Opinions, { Opinions_List } from './components/Opinions';
import TileList from './components/TileList';
import CtaSection from './components/CtaSection';
import SimpleCtaSection from './components/SimpleCtaSection';
import HeroBackgroundImg from './components/HeroBackgroundImg';
import Benefits from './components/Benefits';
import CourseModules from './components/CourseModules';
import ImageShowcase from './components/ImageShowcase';
import Bonuses from './components/Bonuses';
import TilesGrid, { TilesGrid_Item } from './components/TilesGrid';
import Content from '../components/Content';
import TilesSticky, { TilesSticky_Item } from './components/TilesSticky';
import TilesFeatures, { TilesFeatures_Item } from './components/TilesFeatures';
import Community from './components/Community';
import ChapterList from './components/ChaptersList';
import Reviews from './components/Reviews';
import Introduction from './components/Introduction';
import ContactForm from './components/ContactForm';
import TabSection, { TabSection_Item } from './components/TabSection';
import TilesIndicated, { TilesIndicated_Item } from './components/TilesIndicated';
import productVariant from './components/productVariant';
import productParameters from './components/productParameters';
import TilesIcon, { TilesIcon_Item } from './components/TilesIcon';
import Divider from './components/Divider';
import StepsList, { StepList_Item } from './components/StepList';
import HeroColumn from './components/HeroColumn';
import Newsletter from './components/Newsletter';
import CustomerCaseStudy from './components/CustomerCaseStudy';
import WordsCollection from './components/WordsCollection';
import Partners from './components/Partners';
import MostPopularCourses from './components/MostPopularCourses';
import StepsGrid, { StepsGrid_Item } from './components/StepsGrid';
import ImageAndText from './components/FlexImageAndText'
import HeroSimple from './components/HeroSimple';
import LatestBlogEntries from './components/LatestBlogEntries';
import Support_Page, { Support_Page_Tabs } from './singleTypes/dashboard/Support_Page';
import AffiliateDashboard_Page, { AffiliateDashboardPage_AffiliateCode, AffiliateDashboardPage_TextSection } from './singleTypes/dashboard/AffiliateDashboard_Page';

export const schemaTypes = [
  ...singleTypes,
  ...collectionTypes,

  Logout_Page,
  Support_Page,
  Support_Page_Tabs,
  AffiliateDashboard_Page,

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
  TilesIndicated,
  TilesIndicated_Item,
  productVariant,
  productParameters,
  TilesIcon,
  TilesIcon_Item,
  Divider,
  StepsList,
  StepList_Item,
  HeroColumn,
  Newsletter,
  CustomerCaseStudy,
  WordsCollection,
  Partners,
  Statute_Page_Content,
  Privacy_Policy_Page_Content,
  ImageAndText,
  MostPopularCourses,
  global_OrganizationSchema,
  StepsGrid,
  StepsGrid_Item,
  HeroSimple,
  LatestBlogEntries,
  AffiliateDashboardPage_AffiliateCode,
  AffiliateDashboardPage_TextSection,
];