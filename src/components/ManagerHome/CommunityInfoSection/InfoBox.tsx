import React from 'react';
import Link from 'next/link';
import RankItem from './RankItem';
import { Community } from '../../../types/Community';

const InfoBox = ({ community_name, community_introduction, community_path }: Community): React.ReactElement => {
  const { MAIN_URL, ENDPOINT } = process.env;
  const url = `${MAIN_URL}${ENDPOINT}/${community_path}`;
  return (
    <div className="info_box">
      <div className="info_title">
        <strong>{community_name}</strong>
        <button type="button" className="btn_title_set">
          기본정보 수정
        </button>
      </div>
      <div className="info_notice">
        <p>{community_introduction ? community_introduction : '-'}</p>
      </div>
      <div className="info_link">
        <Link href={url}>{url}</Link>
      </div>
      <div className="info_rank">
        <dl>
          <RankItem title="카테고리" content={'카테고리'} />
          <RankItem title="커뮤니티 랭킹" content={`10위`} />
          <RankItem title="구독자 수" content={10} />
          <RankItem title="게시글 수" content={100000} />
        </dl>
      </div>
    </div>
  );
};

export default InfoBox;
