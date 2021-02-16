import React from 'react';

const RemoveButton = (): React.ReactElement => {
  return (
    <button type="button" className="btn_list_row del">
      <span className="blind">삭제</span>
    </button>
  );
};

export default RemoveButton;
