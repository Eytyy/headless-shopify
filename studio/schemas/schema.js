// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './documents/category';
import product from './documents/product';
import maker from './documents/maker';
import variant from './documents/variant';
import color from './documents/color';
import material from './documents/material';

import productContent from './structure/productContent';
import productMainContent from './structure/productMainContent';
import productDefaultContent from './structure/productDefaultContent';

import variantDefaultContent from './structure/variantDefaultContent';
import variantMainContent from './structure/variantMainContent';
import variantContent from './structure/variantContent';

import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    maker,
    category,
    color,
    material,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    variant,
    variantContent,
    variantMainContent,
    variantDefaultContent,

    productContent,
    productMainContent,
    productDefaultContent,
  ]),
});
