import React from 'react';
import { noticeList } from '../../data/Manager/dashboard';

const NoticeSection = (): React.ReactElement => {
  return (
    <div className="inner_box notice_box">
      <strong>공지사항</strong>
      <ul className="notice_list">
        {noticeList.map((notice) => {
          const { no, title, url } = notice;
          return (
            <li key={no}>
              <a href={url}>{title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NoticeSection;
