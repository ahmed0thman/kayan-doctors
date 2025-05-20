export type post = {
  id: string;
  date: Date;
  postHTMLContent: string;
};

export type postActionType = "new" | "comments" | "edit" | "delete" | null;

export type postAction = {
  post: post;
  action: postActionType;
};
