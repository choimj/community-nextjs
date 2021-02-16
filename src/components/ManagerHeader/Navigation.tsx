import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { menus } from './data/menus';
import AccordionTitle from './AccordionTitle';
import { MANAGER_PATH } from '../../routers';

const Navigation = ({ communityPath }: any): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/');
  const dynamicManagerPath = `/${communityPath}${MANAGER_PATH}`;
  const [openMenu, setOpenMenu] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');

  useEffect(() => {
    const currentPath = path.pop() ?? '';
    const currentOpenMenu = menus.find((menu) => menu.submenu.find((submenu) => submenu.path === currentPath)) ?? { path: '' };

    setOpenMenu(currentOpenMenu.path);
    setSelectedMenu(currentPath);
  }, [path]);

  return (
    <div className="admin_snb">
      <li className="admin_snb_top">
        <Link href={dynamicManagerPath}>
          <button type="button" className="btn_admin_home">
            관리자 홈
          </button>
        </Link>
      </li>
      <ul className="admin_snb_list">
        {menus.map((menu) => {
          const { name, icon, path, submenu: submenus } = menu;
          return (
            <AccordionTitle key={path} name={name} icon={icon} open={path === openMenu}>
              {submenus && (
                <ul className="category_list">
                  {submenus.map((submenu) => {
                    const { name, path } = submenu;
                    return (
                      <li key={path} className={classNames({ active: path === selectedMenu })}>
                        <Link href={`${dynamicManagerPath}/${path}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </AccordionTitle>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
