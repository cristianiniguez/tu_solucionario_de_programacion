import { Page } from '@notionhq/client/build/src/api-types';

import NotionLib from '@/lib/notion';
import { TPost } from '@/types/common';
import { getPageProperty } from '@/utils/notion';

class PostsService {
  private notionDB: NotionLib;
  private dbId: string;

  constructor() {
    this.notionDB = new NotionLib();
    this.dbId = NotionLib.posts_db_id;
  }

  private getProperties(page: Page): TPost {
    return {
      id: page.id,
      name: getPageProperty(page, 'name'),
      description: getPageProperty(page, 'description'),
      papersDb: getPageProperty(page, 'papersDb'),
    };
  }

  public async getAll(): Promise<TPost[]> {
    const { results } = await this.notionDB.getDbData(this.dbId);
    return results.map((page) => this.getProperties(page));
  }

  public async getBySubject(subject: string): Promise<TPost[]> {
    const { results } = await this.notionDB.getDbData(this.dbId, {
      property: 'subjects',
      multi_select: { contains: subject },
    });
    return results.map((page) => this.getProperties(page));
  }

  public async getById(id: string): Promise<TPost | null> {
    const post = await this.notionDB.getPageData(id);
    return post ? this.getProperties(post) : null;
  }

  public async test() {
    const post = await this.notionDB.getPageData('bebc5f51-6529-4dd9-a823-a69d2389f4ee');
    return post;
  }
}

export default PostsService;
