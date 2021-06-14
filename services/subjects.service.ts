import NotionLib from '@/lib/notion';
import { TSubject } from '@/types/common';

class SubjectsService {
  private notionDB: NotionLib;

  constructor() {
    this.notionDB = new NotionLib();
  }

  async getAll(): Promise<TSubject[]> {
    const { results } = await this.notionDB.getSubjectsData();
    return results.map(({ id, properties }) => ({
      id,
      name: properties.name.title[0].text.content,
      code: properties.code.rich_text[0].text.content,
      description: properties.description.rich_text[0].text.content,
      brandColor: properties.brandColor.rich_text[0].text.content,
      textColor: properties.textColor.rich_text[0].text.content,
    }));
  }
}

export default SubjectsService;
