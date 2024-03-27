import { HeroSimple_Title } from "../../components/HeroSimple";

const title = 'Strona program lojalnościowy'
const icon = () => '🎁';

export default {
  name: 'AffiliateDashboard_Page',
  type: 'document',
  title,
  icon,
  fields: [
    {
      name: 'HeroSimple',
      type: 'HeroSimple',
      title: HeroSimple_Title,
      options: { collapsible: true, collapsed: true },
      validation: Rule => Rule.required(),
    },
    // {
    //   name: 'Balance',
    //   title: 'Saldo',
    //   type: 'AffiliateDashboard_Page_Balance',
    //   validation: Rule => Rule.required(),
    // },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
};
