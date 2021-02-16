import React from 'react';

interface ITreeGroupProps {
  children?: React.ReactNode;
}

const TreeGroup = ({ children }: ITreeGroupProps): React.ReactElement => {
  return <ul className="grup_list">{children}</ul>;
};

export default TreeGroup;
