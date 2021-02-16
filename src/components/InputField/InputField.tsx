import React, { useState } from 'react';
import classNames from 'classnames';
import HelperText from '../HelperText';

interface IInputFieldProps {
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  helperLeftText?: string;
  helperText?: string;
  showCount?: boolean;
  maxLength?: number;
  error?: boolean;
  errorMessage?: string;
  wrapperStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  wrapperClass?: string;
  inputClass?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  name,
  value = '',
  placeholder,
  helperLeftText,
  helperText,
  showCount = false,
  maxLength = 0,
  error = false,
  errorMessage,
  wrapperStyle,
  inputStyle,
  wrapperClass,
  inputClass,
  children,
  onChange,
}: IInputFieldProps): React.ReactElement => {
  const [_value, setValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <>
      <div className={classNames('input_box', wrapperClass)} style={wrapperStyle}>
        <input
          style={inputStyle}
          className={classNames(inputClass, { type_error: error })}
          type={type}
          name={name}
          placeholder={placeholder}
          value={_value}
          onChange={handleChange}
        />
        {children}
      </div>
      {(helperText || helperLeftText || errorMessage) && (
        <HelperText
          error={error}
          leftText={helperLeftText}
          rightText={
            <>
              {error ? errorMessage ?? '' : helperText ?? ''}
              {showCount && maxLength > 0 && (
                <em>
                  ({_value.length}/{maxLength})
                </em>
              )}
            </>
          }
        />
      )}
    </>
  );
};

export default InputField;
