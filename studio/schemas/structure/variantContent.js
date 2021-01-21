import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'variantContent',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'shopify', title: 'Shopify'},
  ],
  fields: [
    {
      type: 'variantMainContent',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'variantDefaultContent',
      name: 'shopify',
      fieldset: 'shopify',
    },
  ],
};
