import React from 'react';

interface ITableProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Table = ({children}:ITableProps): React.ReactElement => {
  return (
    <div className="section type_table">
      <div className="table_area">
        <div className="common_boxtbl style_basic">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Table;
