import React from 'react';
import classNames from 'classnames';

interface IIconButtonProps {
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({ type, onClick }: IIconButtonProps): React.ReactElement => {
  return (
    <div className="btn_box">
      <button type="button" className={classNames('btn_status', type)} onClick={onClick} />
    </div>
  );
};

export default IconButton;
