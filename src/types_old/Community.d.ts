export interface Community {
  no: number;
  type: string;
  src: string;
  writer: string;
  title: string;
  desc: ReactElement;
  date: string;
}

export interface CoummunityTop10 {
  no: number;
  thumbnail: string;
  title: string;
  subscriberCount: number;
  postCount: number;
}

export interface CommunityListType {
  no: number;
  rank: number;
  sort: string;
  coName: string;
  admin: string;
  img: string;
  article: string;
  categories: string;
  newPosts: number;
  totalPosts: number;
  subscribers: number;
  todayVisitors: number;
}

export interface PostListType {
  no: number;
  title: string;
  img: string;
  article: string;
  writer: string;
  likeItCount: number;
  commentCount: number;
  totalCount: number;
  createdDate: string;
}
