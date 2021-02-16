import React from 'react';

interface IInfoTitleProps {
  title: string;
  isRequired?: boolean;
}

const InfoTitle = ({title, isRequired = false}:IInfoTitleProps): React.ReactElement => {
  return (
    <p className="element_title">
      <strong>
        {title}
        {isRequired && (
          <span className="essential">
            *
            <em className="blind">필수</em>
          </span>
        )}
      </strong>
    </p>
  );
};

export default InfoTitle;
