import React from 'react';
import ManagerSectionTitleBar from '../../ManagerSectionTitleBar';
import StatisticsDetail from './StatisticsDetail';
import { statistics } from '../../../data/Manager/dashboard';

const StatisticsBar = (): React.ReactElement => {
  const { visitSubscriberCount, visitCount, subscriber, newPostCount } = statistics;

  return (
    <>
      <ManagerSectionTitleBar>
        <strong>2020.10.31</strong>
        <button type="button" className="btn_calender">
          <span className="blind" />
        </button>
        <span className="sub_info">2020.03.17. 17:30 기준</span>
      </ManagerSectionTitleBar>
      <div className="section">
        <ul className="follow_list">
          <StatisticsDetail
            iconType="type_01"
            title="방문 구독자 수"
            desc={
              <>
                커뮤니티에 방문한 구독자 수를
                <br />
                실시간으로 집게한 숫자입니다.
              </>
            }
            count={visitSubscriberCount}
          />
          <StatisticsDetail
            iconType="type_02"
            title="방문 수"
            desc={
              <>
                커뮤니티에 방문한 수를
                <br />
                실시간으로 집게한 숫자입니다.
              </>
            }
            count={visitCount}
          />
          <StatisticsDetail
            iconType="type_03"
            title="구독자 수"
            desc={
              <>
                커뮤니티에 방문한 구독자 수를
                <br />
                실시간으로 집게한 숫자입니다.
              </>
            }
            count={subscriber}
          />
          <StatisticsDetail
            iconType="type_04"
            title="새글 수"
            desc={
              <>
                커뮤니티에 방문한 구독자 수를
                <br />
                실시간으로 집게한 숫자입니다.
              </>
            }
            count={newPostCount}
          />
        </ul>
      </div>
    </>
  );
};

export default StatisticsBar;
