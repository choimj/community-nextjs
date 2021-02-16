import { gql } from '@apollo/client';

export const COMMUNITIES = gql`
  query {
    communities {
      _id
      community_name
      community_type
      community_path
      category_main
      category_sub
      today_visitor_cnt
      new_post_cnt
    }
  }
`;

export const COMMUNITY = gql`
  query($community_path: String) {
    community(community_path: $community_path) {
      _id
      community_name
      community_type
      community_path
      community_introduction
      category_main
      category_sub
      today_visitor_cnt
      new_post_cnt
    }
  }
`;
