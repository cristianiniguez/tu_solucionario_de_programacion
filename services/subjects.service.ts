import { Page } from '@notionhq/client/build/src/api-types';

import NotionLib from '@/lib/notion';
import { TSubject } from '@/types/common';
import { getPageProperty } from '@/utils/notion';

class SubjectsService {
  private notionDB: NotionLib;
  private dbId = NotionLib.db_id;

  constructor() {
    this.notionDB = new NotionLib();
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
      postsDb: getPageProperty(page, 'postsDb'),
    };
  }

  public async getAll(): Promise<TSubject[]> {
    const { results } = await this.notionDB.getDbData(this.dbId);
    return results.map((page) => this.getProperties(page));
  }

  public async getBySlug(slug: string): Promise<TSubject | null> {
    const { results } = await this.notionDB.getDbData(this.dbId, {
      property: 'slug',
      text: { equals: slug },
    });
    const [result] = results;
    return result ? this.getProperties(result) : null;
  }
}

export default SubjectsService;
