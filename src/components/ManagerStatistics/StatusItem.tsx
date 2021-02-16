import React from 'react';
import classNames from 'classnames';

interface IStatusItemProps {
  title: string;
  count: string;
  error?: boolean;
}

const StatusItem = ({ title, count, error = false }: IStatusItemProps): React.ReactElement => {
  return (
    <li>
      <strong>
        <span className="ico_follow type_02" />
        {title}
      </strong>
      <span className={classNames({ error_color: error })}>{count}</span>
    </li>
  );
};

export default StatusItem;
