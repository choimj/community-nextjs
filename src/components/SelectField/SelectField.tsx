import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface ISelectFieldProps {
  placeholder?: string;
  defaultValue?: number | string;
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  onChange?: (key: number | string, value: string) => void;
}

const SelectField = ({ placeholder, defaultValue, children, style = {}, onChange }: ISelectFieldProps): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState('');

  useEffect(() => {
    if (defaultValue && children) {
      React.Children.map(children, (child) => {
        const { value, children } = child.props;
        if (defaultValue === value) {
          setSelectedLabel(children);
        }
      });
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (key: number | string, value: string) => {
    setSelectedValue(key);
    setSelectedLabel(value);
    setOpen(false);
    if (onChange) {
      onChange(key, value);
    }
  };

  return (
    <div className="LD_select" style={{ width: '100%', ...style }}>
      <button type="button" className="selected_item" onClick={handleClick}>
        {selectedLabel ? selectedLabel : placeholder}
      </button>
      <div className="LD_select_resultbox" style={{ display: open ? 'block' : 'none' }}>
        <ul>
          {children &&
            React.Children.map(children, (child) => {
              const { value, children } = child.props;
              return (
                <li key={value} className={classNames({ selected: selectedValue === value })}>
                  <button type="button" className="resultitem" onClick={() => handleChange(value, children)}>
                    {children}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SelectField;
