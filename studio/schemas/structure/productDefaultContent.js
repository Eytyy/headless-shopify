export default {
  title: 'Product Default Content',
  name: 'productDefaultContent',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'deleted',
      title: 'Deleted',
      type: 'boolean',
      description: 'This can be a flag set if the item is deleted from Shopify',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Shopify Image',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'productId',
      title: 'Product ID',
      type: 'number',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'defaultPrice',
      title: 'Default Price',
      type: 'string',
      description: 'This comes from Shopify and cannot be changed',
      readOnly: true,
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'variant'}}],
    },
    {
      name: 'defaultVariant',
      type: 'variantDefaultContent',
    },
  ],
};
