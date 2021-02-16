import React from 'react';

interface IPlusButtonProps {
  label: string;
}

const PlusButton = ({ label }: IPlusButtonProps): React.ReactElement => {
  return (
    <div className="large_category_add">
      <button type="button">
        <span>{label}</span>
      </button>
    </div>
  );
};

export default PlusButton;
