import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface IMenuItemProps {
  name: string,
  icon?: string,
  open: boolean,
  children?: React.ReactChild
}

const AccordionTitle = ({name, icon, children, open}: IMenuItemProps): React.ReactElement => {
  const [active, setActive] = useState(open);

  useEffect(() => {
    if (open) setActive(open);
  }, [open]);

  const handleClickToggleMenuItem = () => {
    setActive(!active);
  };

  return (
    <li className={classNames({active})}>
      <button type="button" className={classNames('section_title', `type_${icon}`)} onClick={handleClickToggleMenuItem}>{name}</button>
      {children}
    </li>
  );
};

export default AccordionTitle;
