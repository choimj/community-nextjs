import React from 'react';

const AddButton = (): React.ReactElement => {
  return (
    <button type="button" className="btn_list_row add">
      <span className="blind">추가</span>
    </button>
  );
};

export default AddButton;
