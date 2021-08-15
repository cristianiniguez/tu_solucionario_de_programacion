import { Client } from '@notionhq/client';

class NotionLib {
  private client: Client;

  public static db_id = process.env.NOTION_DB_ID;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async getDbData(database_id: string) {
    const db = await this.client.databases.query({ database_id });
    return db;
  }
}

export default NotionLib;
