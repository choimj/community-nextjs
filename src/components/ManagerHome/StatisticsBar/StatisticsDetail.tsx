import React from 'react';
import classNames from 'classnames';

interface IStatisticsDetailProps {
  iconType: string;
  title: string;
  desc: React.ReactElement;
  count: number;
}

const StatisticsDetail = ({iconType, title, desc, count}:IStatisticsDetailProps): React.ReactElement => {
  return (
    <li>
      <strong>
        <span className={classNames('ico_follow', iconType)} />
        {title}
      </strong>
      <p>
        {desc}
      </p>
      <span>{count > 0 ? count.toLocaleString() : '-'}</span>
    </li>
  );
};

export default StatisticsDetail;
