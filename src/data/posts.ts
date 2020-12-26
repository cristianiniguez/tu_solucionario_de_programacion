export interface IPost {
  NO_ID_FIELD: string;
  title: string;
  description: string;
  subject: string;
  pages: IPage[];
}

export interface IPage {
  title: string;
  path: string;
}
