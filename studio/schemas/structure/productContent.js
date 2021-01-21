import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'productContent',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'shopify', title: 'Shopify'},
  ],
  fields: [
    {
      type: 'productMainContent',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'productDefaultContent',
      name: 'shopify',
      fieldset: 'shopify',
    },
  ],
};
