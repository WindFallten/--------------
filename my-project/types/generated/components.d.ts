import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksRichTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text_blocks';
  info: {
    displayName: 'rich-text-block';
    icon: 'code';
  };
  attributes: {
    info: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.rich-text-block': BlocksRichTextBlock;
    }
  }
}
