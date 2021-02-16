export interface SubscriptionQuestion {
  question_title: string;
  question_type: string;
  question_item: QuestionItem[];
}

export interface QuestionItem {
  question_item_title: string;
}
