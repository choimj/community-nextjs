import React from 'react';

interface IEditTreeItemProps {
  placeholder?: string;
  disabled?: boolean;
  iconClass?: string;
}

const EditTreeItem = ({ placeholder, disabled = false, iconClass }: IEditTreeItemProps): React.ReactElement => {
  return (
    <li className="type_check">
      <a href="#">
        {iconClass && <span className={iconClass} />}
        <input type="text" className="category_item" placeholder={placeholder} disabled={disabled} />
      </a>
    </li>
  );
};

export default EditTreeItem;
