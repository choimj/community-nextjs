import React from 'react';

const CheckBox = (): React.ReactElement => {
  return (
    <div className="LD_formbtn">
      <label>
        <input className="LDinput" type="checkbox" name="test_checkbox" />
        <span className="icon" />
        <span className="label_text" />
      </label>
    </div>
  );
};

export default CheckBox;
