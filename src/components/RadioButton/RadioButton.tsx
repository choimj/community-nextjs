import React from 'react';

interface IRadioButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  name: string;
  style?: React.CSSProperties;
  src?: string;
  onChnage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ label, value, checked, name, style, src, onChnage }: IRadioButtonProps): React.ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChnage) {
      onChnage(e);
    }
  };

  return (
    <div className="LD_formbtn" style={style}>
      <label>
        <input className="LDinput" type="radio" name={name} defaultChecked={checked} value={value} onChange={handleChange} />
        <span className="icon" />
        <span className="label_text">{label}</span>
      </label>
      {src && (
        <div className="img_box">
          <img src={src} alt={src} />
        </div>
      )}
    </div>
  );
};

export default RadioButton;
