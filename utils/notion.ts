import { Page, RichTextText } from '@notionhq/client/build/src/api-types';

export const getPageProperty = (page: Page, property: string): string | null => {
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
      const { text } = value.rich_text[0] as RichTextText;
      return text.content;
    }
    default:
      return null;
  }
};
