import NotionLib from '@/lib/notion';
import { TSubject } from '@/types/common';
import {
  RichTextPropertyValue,
  RichTextText,
  TitlePropertyValue,
} from '@notionhq/client/build/src/api-types';

class SubjectsService {
  private notionDB: NotionLib;

  constructor() {
    this.notionDB = new NotionLib();
  }

  async getAll(): Promise<TSubject[]> {
    const { results } = await this.notionDB.getSubjectsData();
    return results.map(({ id, properties }) => {
      return {
        id,
        name: ((properties.name as TitlePropertyValue).title[0] as RichTextText).text.content,
        slug: ((properties.slug as RichTextPropertyValue).rich_text[0] as RichTextText).text
          .content,
        description: (
          (properties.description as RichTextPropertyValue).rich_text[0] as RichTextText
        ).text.content,
        brandColor: ((properties.brandColor as RichTextPropertyValue).rich_text[0] as RichTextText)
          .text.content,
        textColor: ((properties.textColor as RichTextPropertyValue).rich_text[0] as RichTextText)
          .text.content,
        icon: ((properties.icon as RichTextPropertyValue).rich_text[0] as RichTextText).text
          .content,
      };
    });
  }
}

export default SubjectsService;
