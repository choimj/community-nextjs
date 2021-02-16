import React from 'react';
import classNames from 'classnames';

interface IButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, style, children, onClick }: IButtonProps): React.ReactElement => {
  return (
    <button type="button" className={classNames('LD_btn', className)} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
