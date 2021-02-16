import React from 'react';

interface IManagerSectionTitleBarProps {
  children: React.ReactChild[];
}

const ManagerSectionTitleBar = ({ children }: IManagerSectionTitleBarProps): React.ReactElement => {
  return (
    <div className="section type_title">
      <div className="in_box">{children}</div>
    </div>
  );
};

export default ManagerSectionTitleBar;
