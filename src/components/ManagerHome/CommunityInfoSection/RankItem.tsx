import React from 'react';

interface IRankItemProps {
  title: string;
  content: string | number;
}

const RankItem = ({title, content}: IRankItemProps): React.ReactElement => {
  return (
    <div className="item">
      <dt>{title}</dt>
      <dd>{content}</dd>
    </div>
  );
};

export default RankItem;
