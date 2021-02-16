import React from 'react';
import classNames from 'classnames';

interface ITableCell {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  ellipsis?: boolean;
  className?: string;
  fontColor?: string;
}

const TableCell = ({ children, style = {}, ellipsis = false, className, fontColor }: ITableCell): React.ReactElement => {
  return (
    <div className={classNames('col', className)} style={style}>
      {ellipsis ? (
        <p className={classNames('ellipsis', { point_color: fontColor === 'blue', error_color: fontColor === 'red' })}>{children}</p>
      ) : (
        children
      )}
    </div>
  );
};

export default TableCell;
