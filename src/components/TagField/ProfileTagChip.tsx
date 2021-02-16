import React from 'react';

interface IProfileTagChipProps {
  profile: string;
  title: string;
  subTitle: string;
  onClickDelete?: (title: string, subTitle: string) => void;
}

const ProfileTagChip = ({ profile, title, subTitle, onClickDelete }: IProfileTagChipProps): React.ReactElement => {
  return (
    <div className="LD_tag has_profile">
      <div className="profileimg">
        <div className="image_box" style={{ backgroundImage: `url(${profile})` }} />
      </div>
      <span className="tag_name">
        {title}
        {subTitle && <span className="thintext">{subTitle}</span>}
      </span>
      {onClickDelete && (
        <button type="button" className="tag_delbtn" onClick={() => onClickDelete(title, subTitle)}>
          <span className="blind">삭제</span>
        </button>
      )}
    </div>
  );
};

export default ProfileTagChip;
