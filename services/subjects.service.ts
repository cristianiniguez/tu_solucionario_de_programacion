import { Page } from '@notionhq/client/build/src/api-types';

import NotionLib from '@/lib/notion';
import { TSubject } from '@/types/common';
import { getPageProperty } from '@/utils/notion';

class SubjectsService {
  private notionDB: NotionLib;

  constructor() {
    this.notionDB = new NotionLib();
  }

  private getPages() {
    return this.notionDB.getDbData(NotionLib.db_id);
  }

  private getProperties(page: Page): TSubject {
    return {
      id: page.id,
      name: getPageProperty(page, 'name'),
      slug: getPageProperty(page, 'slug'),
      description: getPageProperty(page, 'description'),
      brandColor: getPageProperty(page, 'brandColor'),
      textColor: getPageProperty(page, 'textColor'),
      icon: getPageProperty(page, 'icon'),
    };
  }

  public async getAll(): Promise<TSubject[]> {
    const { results } = await this.getPages();
    return results.map((page) => this.getProperties(page));
  }

  public async getBySlug(slug: string): Promise<TSubject | null> {
    const { results } = await this.getPages();

    const result = results.find((page) => getPageProperty(page, 'slug') === slug);
    return result ? this.getProperties(result) : null;
  }
}

export default SubjectsService;
