import React from 'react';
import classNames from 'classnames';

interface ICardItemProps {
  select?: boolean;
  title: string;
  children?: React.ReactNode;
}

const CardItem = ({ select = false, title, children }: ICardItemProps): React.ReactElement => {
  return (
    <li className={classNames({ select })}>
      <a href="#">
        <button type="button" className="btn_check">
          <span className="blind">체크</span>
        </button>
        <div className="content_info">
          <strong>{title}</strong>
          <p>{children}</p>
        </div>
      </a>
    </li>
  );
};

export default CardItem;
