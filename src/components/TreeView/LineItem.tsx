import React from 'react';

interface ILineItemProps {
  isEdit?: boolean;
  iconClass?: string;
}

const LineItem = ({ isEdit = false, iconClass }: ILineItemProps): React.ReactElement => {
  return (
    <li className="type_line">
      <a href="#">
        {iconClass && <span className={iconClass} />}
        <span className="line" />
        {isEdit && (
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

export default LineItem;
