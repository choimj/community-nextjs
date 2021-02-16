import React from 'react';

const DeleteButton = (): React.ReactElement => {
  return (
    <div className="btn_del_box">
      <button type="button" className="btn_item_del">
        <span className="blind">항목삭제</span>
      </button>
    </div>
  );
};

export default DeleteButton;
