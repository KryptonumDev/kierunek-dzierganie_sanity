import { HeroSimple_Title } from "../components/HeroSimple";
import { StepsGrid_Title } from "../components/StepsGrid";

export default {
  name: 'Knitting_Page',
  title: 'Strona dzierganie na drutach',
  type: 'document',
  icon: () => '🪡',
  fields: [
    {
      name: 'HeroSimple',
      type: 'HeroSimple',
      title: HeroSimple_Title,
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'StepsGrid',
      type: 'StepsGrid',
      title: StepsGrid_Title,
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'listing_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'listing',
    },
    {
      name: 'listing_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'listing',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Zawartość podstrony',
      options: { collapsible: true },
    },
    {
      name: 'listing',
      title: 'Lista wszystkich kursów',
      options: { collapsible: true },
    },
  ],
};
