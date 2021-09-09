import { Client } from '@notionhq/client';
import { Filter, Sort } from '@notionhq/client/build/src/api-types';

class NotionLib {
  private client: Client;

  public static subjects_db_id = process.env.NOTION_SUBJECTS_DB_ID;
  public static posts_db_id = process.env.NOTION_POSTS_DB_ID;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async getDbData(database_id: string, filter?: Filter, sorts?: Sort[]) {
    const db = await this.client.databases.query({ database_id, filter, sorts });
    return db;
  }

  async getPageData(page_id: string) {
    const page = await this.client.pages.retrieve({ page_id });
    return page;
  }
}

export default NotionLib;
