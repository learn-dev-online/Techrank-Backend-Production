import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentTopics extends Schema.Component {
  collectionName: 'components_content_topics';
  info: {
    displayName: 'Topics';
    icon: 'book';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.topics': ContentTopics;
    }
  }
}
