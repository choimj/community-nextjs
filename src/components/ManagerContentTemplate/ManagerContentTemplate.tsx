import React from 'react';
import classNames from 'classnames';
interface IManagerContentTemplateProps {
  title?: string;
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

const ManagerContentTemplate = ({ title, children, className }: IManagerContentTemplateProps): React.ReactElement => {
  return (
    <div className={classNames('admin_content', className)}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default ManagerContentTemplate;
