import React from 'react';

interface IRowItemProps {
  title: string;
  children?: React.ReactNode;
}

const RowItem = ({ title, children }: IRowItemProps): React.ReactElement => {
  return (
    <div className="item_box">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default RowItem;
