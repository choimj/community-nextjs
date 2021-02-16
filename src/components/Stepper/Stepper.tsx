import React from 'react';

const Stepper = (): React.ReactElement => {
  return (
    <div className="LD_stepper">
      <input type="text" className="stepper_input" defaultValue={0} />
      <div className="step_btngroup">
        <button type="button" className="btn_up">
          <span className="blind">크게</span>
        </button>
        <button type="button" className="btn_down">
          <span className="blind">작게</span>
        </button>
      </div>
    </div>
  );
};

export default Stepper;
