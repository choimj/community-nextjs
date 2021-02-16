import React, { useState } from 'react';
import HelperText from '../HelperText';

interface ITagFieldProps {
  children?: React.ReactChild | React.ReactChild[];
  helperText?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string) => void;
}

const TagField = ({ children, helperText, placeholder, onChange, onKeyDown }: ITagFieldProps): React.ReactElement => {
  const [tag, setTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      if (e.key === 'Enter') {
        onKeyDown(tag);
        setTag('');
      }
    }
  };

  return (
    <>
      <div className="list_area">
        <ul className="list_box">{children}</ul>
        <input type="text" className="type_none_style" placeholder={placeholder} value={tag} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
      {helperText && <HelperText defaultText={helperText} />}
    </>
  );
};

export default TagField;
