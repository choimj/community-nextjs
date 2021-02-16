import React from 'react';

const SwitchButton = (): React.ReactElement => {
  return (
    <div className="LD_formbtn d_switch">
      <label>
        <input className="LDinput" type="checkbox" name="test_switch" defaultChecked />
        <span className="switch_img" />
        <span className="label_text">ON</span>
      </label>
    </div>
  );
};

export default SwitchButton;
