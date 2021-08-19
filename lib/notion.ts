import { Client } from '@notionhq/client';
import { Filter } from '@notionhq/client/build/src/api-types';

class NotionLib {
  private client: Client;

  public static db_id = process.env.NOTION_DB_ID;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async getDbData(database_id: string, filter?: Filter) {
    const db = await this.client.databases.query({ database_id, filter });
    return db;
  }

  async getPageData(page_id: string) {
    const page = await this.client.pages.retrieve({ page_id });
    return page;
  }
}

export default NotionLib;
