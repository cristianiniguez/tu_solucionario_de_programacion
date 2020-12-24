export interface Post {
  NO_ID_FIELD: string;
  title: string;
  description: string;
  subject: string;
  pages: Page[];
}

export interface Page {
  title: string;
  content: string;
}
