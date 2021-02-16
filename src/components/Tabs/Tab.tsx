import React from 'react';
import classNames from 'classnames';

interface ITabProps {
  selected?: boolean;
  value: number | string;
  children?: React.ReactNode;
  onClick?: (value: number | string) => void;
}

const Tab = ({ selected = false, value, children, onClick }: ITabProps): React.ReactElement => {
  const handleClickTab = () => {
    if (onClick) onClick(value);
  };

  return (
    <li className={classNames({ selected })}>
      <button type="button" className="LDtabs_item" onClick={handleClickTab}>
        {children}
      </button>
    </li>
  );
};

export default Tab;
