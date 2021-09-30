import { Page } from '@notionhq/client/build/src/api-types';

import NotionLib from '@/lib/notion';
import { TPaper, TPaperWithContent } from '@/types/common';
import { getPageContent, getPageProperty } from '@/utils/notion';

class PapersService {
  private notionDB: NotionLib;
  private dbId: string;

  constructor(dbId: string) {
    this.notionDB = new NotionLib();
    this.dbId = dbId;
  }

  private getProperties(page: Page): TPaper {
    return {
      id: page.id,
      name: getPageProperty(page, 'name'),
      title: getPageProperty(page, 'title'),
      position: getPageProperty(page, 'position'),
    };
  }

  public async getAll(): Promise<TPaper[]> {
    const { results } = await this.notionDB.getDbData(this.dbId, undefined, [
      { property: 'name', direction: 'ascending' },
    ]);
    return results.map((page) => this.getProperties(page));
  }

  public async getById(id: string): Promise<TPaperWithContent | null> {
    const paper = await this.notionDB.getPageData(id);
    const content = await this.notionDB.getPageContent(paper.id);
    return paper
      ? { ...this.getProperties(paper), content: getPageContent(content.results) }
      : null;
  }
}

export default PapersService;
