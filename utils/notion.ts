import { Page, RichTextText } from '@notionhq/client/build/src/api-types';

export const getPageProperty = (page: Page, property: string): any => {
  const value = page.properties[property];

  if (!value) {
    return null;
  }

  switch (value.type) {
    case 'title': {
      const { text } = value.title[0] as RichTextText;
      return text.content;
    }
    case 'rich_text': {
      const text = value.rich_text
        .map(({ plain_text, annotations }) => {
          let text_part = plain_text;

          if (annotations.code) {
            text_part = `\`${text_part}\``;
          }

          return text_part;
        })
        .join('');
      return text;
    }
    case 'number': {
      return value.number;
    }
    default:
      return null;
  }
};
