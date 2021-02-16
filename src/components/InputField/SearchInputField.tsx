import React from 'react';

interface ISearchInputFieldProps {
  name?: string;
  style?: React.CSSProperties;
  onChange?: () => void;
}

const SearchInputField = ({ name, style = {}, onChange }: ISearchInputFieldProps): React.ReactElement => {
  return (
    <div className="LD_input d_searchbox" style={{ width: 184, ...style }}>
      <input type="text" name={name} className="textinput" placeholder="검색어를 입력하세요." onChange={onChange} />
      <button type="button" className="LD_input_searchbtn">
        <span className="blind">검색</span>
      </button>
    </div>
  );
};

export default SearchInputField;
