import React from 'react';
import Link from 'next/link';

interface IButtonItemProps {
  children?: React.ReactNode;
}

const ButtonItem = ({ children }: IButtonItemProps): React.ReactElement => {
  return (
    <li>
      <Link href="#">
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default ButtonItem;
