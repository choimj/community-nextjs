import { SubscriptionQuestion } from './Subscribe';
import { BoardItem } from './Board';

export interface Community {
  _id: string;
  create_user_no?: number;
  company_no?: number;
  community_type: string;
  community_name: string;
  community_path: string;
  community_introduction?: string;
  category_main?: number;
  category_sub?: number;
  subscription_mode?: string;
  subscription_desc?: string;
  is_subscription_question?: string;
  subscription_question?: SubscriptionQuestion;
  subscription_class?: string;
  is_public?: boolean;
  is_public_member?: boolean;
  search_word_list?: string[];
  board_list?: BoardItem[];
  main_image?: ObjectStorageFile;
  is_deleted?: boolean;
  insert_date?: string;
  updated_date?: string;
  insert_timestamp?: number;
  updated_timestamp?: number;
  today_visitor_cnt?: number;
  new_post_cnt?: number;
}
