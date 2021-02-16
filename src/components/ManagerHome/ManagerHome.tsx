import React from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import CommunityInfoSection from './CommunityInfoSection';
import StatisticsBar from './StatisticsBar';
import SubscribeSection from './SubscribeSection';
import NoticeSection from './NoticeSection';
import BannerSection from './BannerSection';

const ManagerHome = (): React.ReactElement => {
  return (
    <ManagerContentTemplate>
      <CommunityInfoSection />
      <StatisticsBar />
      <SubscribeSection />
      <div className="section type_half">
        <NoticeSection />
        <BannerSection />
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerHome;
