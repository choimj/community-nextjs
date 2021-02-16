import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { Tab, Tabs } from '../Tabs';
import CompanyPanel from './CompanyPanel';
import CommunityPanel from './CommunityPanel';
import Button from '../Button';

const ManagerCompanyInfo = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState<number | string>('company');

  const handleClickTab = (value: number | string) => {
    setSelectedTab(value);
  };

  return (
    <ManagerContentTemplate title="회사/단체 커뮤니티 기본정보">
      <Tabs>
        <Tab value="company" selected={selectedTab === 'company'} onClick={handleClickTab}>
          회사/단체 정보
        </Tab>
        <Tab value="community" selected={selectedTab === 'community'} onClick={handleClickTab}>
          커뮤니티 정보
        </Tab>
      </Tabs>
      {selectedTab === 'company' ? <CompanyPanel /> : <CommunityPanel />}
      <div className="section txtcnt">
        <Button className="c_blue">저장</Button>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerCompanyInfo;
