import React from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { TagField, TagChip } from '../TagField';
import { Table, TableCell } from '../Table';
import EmptySet from './EmptySet';
import InformationBox from './InformationBox';
import { prohibitedPosts } from '../../data/Manager/board';
import CheckBox from '../CheckBox';

const ManagerWords = (): React.ReactElement => {
  return (
    <ManagerContentTemplate title="금칙어 설정">
      <InformationBox>
        <TagField placeholder="금칙어로 지정한 단어를 입력하세요. (최대 20개까지 등록 가능)">
          <li>
            <TagChip label="금칙어 태그" error />
          </li>
          <li>
            <TagChip label="금칙어 태그" error />
          </li>
          <li>
            <TagChip label="금칙어 태그" error />
          </li>
        </TagField>
      </InformationBox>
      <div className="section type_table">
        <div className="sort_box" style={{ textAlign: 'right' }}>
          <div className="LD_select" style={{ width: 180 }}>
            <button type="button" className="selected_item">
              게시판전체 (30)
            </button>
          </div>
          <div className="LD_input d_searchbox" style={{ width: 180 }}>
            <input type="text" className="textinput" placeholder="게시글을 검색하세요." />
            <button type="button" className="LD_input_searchbtn">
              <span className="blind">검색</span>
            </button>
          </div>
        </div>
        <Table>
          <div className="list_header clearfix">
            <TableCell style={{ flex: '0.5' }}>
              <CheckBox />
            </TableCell>
            <TableCell>등록게시판</TableCell>
            <TableCell>타입</TableCell>
            <TableCell style={{ flex: 3 }}>제목</TableCell>
            <TableCell>글쓴이</TableCell>
            <TableCell>작성일</TableCell>
            <TableCell>조회수</TableCell>
            <TableCell>좋아요수</TableCell>
            <TableCell>댓글수</TableCell>
          </div>
          <div className="list_body">
            {prohibitedPosts.length > 0 ? (
              <>
                {prohibitedPosts.map(() => (
                  <div className="row">
                    <TableCell style={{ flex: '0.5' }}>
                      <CheckBox />
                    </TableCell>
                    <TableCell ellipsis>자유게시판</TableCell>
                    <TableCell ellipsis>텍스트</TableCell>
                    <TableCell ellipsis style={{ flex: 3 }}>
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사
                    </TableCell>
                    <TableCell ellipsis>김더존(douzone123)</TableCell>
                    <TableCell ellipsis>2020.12.12</TableCell>
                    <TableCell ellipsis>111,111,111</TableCell>
                    <TableCell ellipsis>111,111</TableCell>
                    <TableCell ellipsis>111</TableCell>
                  </div>
                ))}
              </>
            ) : (
              <EmptySet />
            )}
          </div>
        </Table>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerWords;
