export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [
    {
      name: 'main',
      title: 'Main',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'shopify',
      title: 'Shopify',
      description: 'Read only',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'main',
      type: 'productContent',
      fieldset: 'main',
    },
    {
      name: 'shopify',
      type: 'productDefaultContent',
      fieldset: 'shopify',
    },
  ],

  preview: {
    select: {
      title: 'main.title',
      media: 'main.mainImage',
    },
  },
};
