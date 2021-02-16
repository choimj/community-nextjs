import React from 'react';

interface ITreeViewProps {
  children?: React.ReactNode;
}

const TreeView = ({ children }: ITreeViewProps): React.ReactElement => {
  return <ul className="category_set_list">{children}</ul>;
};

export default TreeView;
