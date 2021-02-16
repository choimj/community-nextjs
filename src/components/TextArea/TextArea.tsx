import React, { useState } from 'react';
import classNames from 'classnames';
import HelperText from '../HelperText';

interface ITextAreaProps {
  name?: string;
  rows?: number;
  cols?: number;
  value?: string;
  placeholder?: string;
  helperText?: string;
  showCount?: boolean;
  maxLength?: number;  
  style?: React.CSSProperties;
  error?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({name, rows = 5, cols = 1, value = '', placeholder, helperText, showCount = false, maxLength = 0, style = {}, error = false, errorMessage, onChange}: ITextAreaProps): React.ReactElement => {
  const [_value, setValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  
  return (
    <>
      <div className="LUX_basic_textarea">
        {/* 입력창에 포커스 - inpbx class="on" 추가  */}
        <div className="inpbx">
          {/* 행간과 textarea padding 값 변경 가능*/}
          <textarea className={classNames('field_inp', {type_error: error})}placeholder={placeholder} name={name} rows={rows} cols={cols} value={_value} style={{width: '100%', height: 100, ...style}} onChange={handleChange}/>
        </div>
      </div>
      {(helperText || errorMessage) && (
        <HelperText error={error} rightText={(
          <>
            {error ? errorMessage ?? '' : helperText ?? ''}
            {showCount && maxLength > 0 && (
              <em>
                (
                {_value.length}
                /
                {maxLength}
                )
              </em>
            )}
          </>
        )}
        />
      )}
    </>
  );
};

export default TextArea;
