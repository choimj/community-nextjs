import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { Tabs, Tab } from '../Tabs';
import MailInformation from './MailInformation';
import NoteInformation from './NoteInformation';
import SendList from './SendList';

const ManagerSend = (): React.ReactElement => {
  const sendType = [
    { title: '메일', value: 1, path: 'mail' },
    { title: '쪽지', value: 2, path: 'message' },
  ];
  const [selectedType, setSelectedType] = useState<string | number>(1);

  const handleClickTab = (value: number | string) => {
    setSelectedType(value);
  };

  const _type = sendType.find((type) => type.value === selectedType);

  return (
    <ManagerContentTemplate title="메일/쪽지 보내기">
      <Tabs>
        {sendType.map((type) => {
          const { title, value } = type;
          return (
            <Tab key={value} value={value} onClick={handleClickTab} selected={selectedType === value}>
              {title}
            </Tab>
          );
        })}
      </Tabs>
      <div className="section type_box">{selectedType === 1 ? <MailInformation /> : <NoteInformation />}</div>
      <div className="section type_table">{_type && <SendList type={_type} />}</div>
    </ManagerContentTemplate>
  );
};

export default ManagerSend;
