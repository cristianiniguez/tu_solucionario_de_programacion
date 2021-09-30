import { Block, Page, RichText, RichTextText } from '@notionhq/client/build/src/api-types';

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

export const getPageContent = (blocks: Block[]): string => {
  return blocks.map(getContentFromBlock).join('\n\n');
};

const getContentFromBlock = (block: Block): string => {
  switch (block.type) {
    case 'heading_1':
      return block.heading_1.text.map(getContentFromRichText).join('');
    case 'heading_2':
      return block.heading_2.text.map(getContentFromRichText).join('');
    case 'paragraph':
      return block.paragraph.text.map(getContentFromRichText).join('');
    case 'bulleted_list_item':
      return '- ' + block.bulleted_list_item.text.map(getContentFromRichText).join('');
    default:
      return '';
  }
};

const getContentFromRichText = ({ plain_text, annotations }: RichText): string => {
  let content = plain_text;

  if (annotations.code) {
    content = `\`${content}\``;
  }

  return content;
};
