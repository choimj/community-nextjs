import React from 'react';

interface IOptionProps {
  value: number|string;
  children: React.ReactChild;
}

const Option = ({children}: IOptionProps): React.ReactElement => {
  return (
    <>{children}</>
  );
};

export default Option;
