import React from 'react';
import classNames from 'classnames';

interface ITreeItemProps {
  title: string;
  children?: React.ReactNode;
  active?: boolean;
  showEditButton?: boolean;
  group?: boolean;
  iconClass?: string;
}

const TreeItem = ({ title, children, active = false, showEditButton = false, group = false, iconClass }: ITreeItemProps): React.ReactElement => {
  return (
    <li className={classNames({ active, type_grup: group })}>
      <a href="#">
        {iconClass && <span className={iconClass} />}
        <span className="category_item">{title}</span>
        {children}
        {showEditButton && (
          <div className="btn_box">
            <button type="button" className="btn_del">
              <span className="blind">삭제</span>
            </button>
            <button type="button" className="btn_write">
              <span className="blind">글쓰기</span>
            </button>
          </div>
        )}
      </a>
    </li>
  );
};

export default TreeItem;
