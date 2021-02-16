import React from 'react';

interface IInfoSectionProps {
  children?: React.ReactChild | React.ReactChild[];
}

const InfoSection = ({ children }: IInfoSectionProps): React.ReactElement => {
  return <div className="inner_box">{children}</div>;
};

export default InfoSection;
