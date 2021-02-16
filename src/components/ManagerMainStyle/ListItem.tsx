import React from 'react';
import classNames from 'classnames';
import RadioButton from '../RadioButton';

interface IListItemProps {
  active?: boolean;
  title: string;
  name: string;
}

const ListItem = ({ active = false, title, name }: IListItemProps): React.ReactElement => {
  return (
    <li className={classNames({ active })}>
      <a href="javascript:;">
        <span>{title}</span>
        <div className="radio_box">
          <RadioButton label="카드형" name={name} value="card" checked />
          <RadioButton label="리스트형" name={name} value="list" />
        </div>
        <button type="button" className="btn_del">
          <span className="blind">삭제</span>
        </button>
      </a>
    </li>
  );
};

export default ListItem;
