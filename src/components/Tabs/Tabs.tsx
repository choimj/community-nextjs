import React from 'react';
import classNames from 'classnames';

interface ITabsProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  type?: string;
}

const Tabs = ({ children, className, type }: ITabsProps): React.ReactElement => {
  return (
    <div className={classNames('LD_tabs ', { d_smallv1: !type, d_smallv2: type === 'button' }, className)}>
      <ul className="LDtabs_list">{children}</ul>
    </div>
  );
};

export default Tabs;
