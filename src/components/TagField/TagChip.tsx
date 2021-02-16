import React from 'react';
import classNames from 'classnames';

interface ITagChipProps {
  label: string;
  error?: boolean;
  onClickDelete?: (label: string) => void;
}

const TagChip = ({ label, error = false, onClickDelete }: ITagChipProps): React.ReactElement => {
  const handleClickDelete = () => {
    if (onClickDelete) {
      onClickDelete(label);
    }
  };
  return (
    <div className={classNames('LD_tag hasdel', { error_tag: error })}>
      <span className="tag_name">{label}</span>
      <button type="button" className="tag_delbtn" onClick={handleClickDelete}>
        <span className="blind">삭제</span>
      </button>
    </div>
  );
};

export default TagChip;
