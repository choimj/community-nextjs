import React from 'react';
import classNames from 'classnames';

interface IInfoContentProps {
  className?: string;
  children: React.ReactChild | React.ReactChild[]
}

const InfoContent = ({className, children}: IInfoContentProps): React.ReactElement => {
  return (
    <div className={classNames('element_content', className)}>
      {children}
    </div>
  );
};

export default InfoContent;
