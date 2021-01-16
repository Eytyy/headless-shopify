export default {
  name: 'variant',
  title: 'Variant',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'shopify', title: 'Shopify'},
  ],
  fields: [
    {
      type: 'variantContent',
      name: 'main',
      fieldset: 'main',
    },
    {
      type: 'defaultVariantContent',
      name: 'shopify',
      fieldset: 'shopify',
    },
  ],
  preview: {
    select: {
      title: 'main.title',
      media: 'mainImage',
    },
  },
};
