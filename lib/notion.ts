import { Client } from '@notionhq/client';

class NotionLib {
  private client: Client;
  private db_id: string;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
    this.db_id = process.env.NOTION_DB_ID;
  }

  async getSubjectsData() {
    const dbs = await this.client.databases.query({ database_id: this.db_id });
    return dbs;
  }
}

export default NotionLib;
