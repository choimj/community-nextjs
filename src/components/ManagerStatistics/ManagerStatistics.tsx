import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';

import { Tab, Tabs } from '../Tabs';
import RankSection from './RankSection';
import StatusSection from './StatusSection';

const ManagerStatistics = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState<number | string>('status');

  const handleClickTab = (value: number | string) => {
    setSelectedTab(value);
  };

  return (
    <ManagerContentTemplate title="통계">
      <Tabs>
        <Tab value="status" selected={selectedTab === 'status'} onClick={handleClickTab}>
          현황
        </Tab>
        <Tab value="rank" selected={selectedTab === 'rank'} onClick={handleClickTab}>
          랭킹
        </Tab>
      </Tabs>
      {selectedTab === 'status' ? <StatusSection /> : <RankSection />}
    </ManagerContentTemplate>
  );
};

export default ManagerStatistics;
