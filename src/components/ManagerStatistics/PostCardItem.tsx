import React from 'react';

interface IPostCardItemProps {
  rank: number;
  data: { no: number; portalId: string; topic: string; hit: number; like: number; comments: number };
}

const PostCardItem = ({ rank, data }: IPostCardItemProps): React.ReactElement => {
  const { portalId, topic, hit, like, comments } = data;

  return (
    <li>
      <strong className="number">
        {rank}
        <span className="blind">위</span>
      </strong>
      <div className="my_status">
        <span className="my_status_class">커뮤니티장</span>
        <span className="my_name">{portalId}</span>
        <p className="topic">{topic}</p>
      </div>
      <div className="my_rank">
        <dl className="rank_status_list">
          <div>
            <dt>조회:</dt>
            <dd>{hit}</dd>
          </div>
          <div>
            <dt>좋아요:</dt>
            <dd>{like}</dd>
          </div>
          <div>
            <dt>댓글:</dt>
            <dd>{comments}</dd>
          </div>
        </dl>
      </div>
    </li>
  );
};

export default PostCardItem;
