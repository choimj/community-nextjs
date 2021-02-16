import React from 'react';

interface IRankCardItemProps {
  rank: number;
  data: { no: number; name: string; portalId: string; visit: number; posts: number; comments: number };
}

const RankCardItem = ({ rank, data }: IRankCardItemProps): React.ReactElement => {
  const { name, portalId, visit, posts, comments } = data;

  return (
    <li>
      <strong className="number">
        {rank}
        <span className="blind">위</span>
      </strong>
      <div className="img_box">
        <img src="//via.placeholder.com/48x48" alt="img" />
      </div>
      <div className="my_info">
        <strong className="name">{name}</strong>
        <div className="my_status">
          <span className="ico_emoticon">
            <img src="//via.placeholder.com/16x16" alt="img" />
          </span>
          <span className="my_status_class">커뮤니티장</span>
          <span className="my_id">{portalId}</span>
        </div>
      </div>
      <div className="my_rank">
        <dl className="rank_status_list">
          <div>
            <dt>방문:</dt>
            <dd>{visit}</dd>
          </div>
          <div>
            <dt>게시글:</dt>
            <dd>{posts}</dd>
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

export default RankCardItem;
