export type TSubject = {
  id: string;
  name: string;
  slug: string;
  description: string;
  brandColor: string;
  textColor: string;
  icon: string;
};

export type TPost = {
  id: string;
  name: string;
  description: string;
  papersDb: string;
};

export type TPaper = {
  id: string;
  name: string;
  title: string;
  position: number;
};

export type TPaperWithContent = TPaper & {
  content: string;
};
