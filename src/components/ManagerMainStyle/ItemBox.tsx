import React from 'react';
import classNames from 'classnames';

interface IItemBoxProps {
  title: string;
  className?: string;
  desc?: string;
  children?: React.ReactNode;
}

const ItemBox = ({ title, className, desc, children }: IItemBoxProps): React.ReactElement => {
  return (
    <div className={classNames('in_box', className)}>
      <strong>{title}</strong>
      {desc && <p>{desc}</p>}
      {children}
    </div>
  );
};

export default ItemBox;
