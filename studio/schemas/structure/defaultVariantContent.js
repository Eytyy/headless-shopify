export default {
  title: 'Default Variant',
  name: 'defaultVariantContent',
  type: 'object',
  description: `This information is sync'd from Shopify and should not be modified here but is mostly just a reference.`,
  fields: [
    {
      title: 'Title',
      name: 'title',
      readOnly: true,
      type: 'string',
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      readOnly: true,
      type: 'number',
    },
    {
      title: 'Price',
      name: 'price',
      readOnly: true,
      type: 'string',
    },
    {
      title: 'Variant Id',
      name: 'variantId',
      readOnly: true,
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      readOnly: true,
      type: 'string',
    },
    {
      title: 'Taxable',
      name: 'taxable',
      readOnly: true,
      type: 'boolean',
    },
    {
      title: 'Inventory Policy',
      name: 'inventoryPolicy',
      readOnly: true,
      type: 'string',
    },
    {
      title: 'Inventory Quantity',
      name: 'inventoryQuantity',
      readOnly: true,
      type: 'number',
    },
    {
      title: 'Bar code',
      name: 'barcode',
      readOnly: true,
      type: 'string',
    },
  ],
};
