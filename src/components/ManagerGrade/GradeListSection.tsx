import React from 'react';
import { Table, TableCell } from '../Table';
import { SelectField, Option } from '../SelectField';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import Stepper from '../Stepper';

interface IGradeListSectionProps {
  useEmoji: boolean;
}

const GradeListSection = ({ useEmoji }: IGradeListSectionProps): React.ReactElement => {
  return (
    <Table>
      <div className="list_header clearfix">
        <TableCell style={{ flex: '0.3' }}>&nbsp;</TableCell>
        <TableCell style={{ flex: '0.5' }}>이모티콘</TableCell>
        <TableCell>등급명</TableCell>
        <TableCell style={{ flex: 3 }}>등급설명</TableCell>
        <TableCell style={{ flex: '1.5' }}>등업방식</TableCell>
      </div>
      <div className="list_body">
        <div className="row">
          <TableCell style={{ flex: '0.3' }}>
            <p className="ellipsis">1</p>
          </TableCell>
          <TableCell style={{ flex: '0.5' }}>
            {useEmoji && (
              <div className="in_box">
                <div className="inc_emoticon">
                  <div className="emoticon">
                    <button type="button" className="LUX_basic_btn emoticon_btn">
                      <span className="sp_co">이모티콘</span>
                    </button>
                  </div>
                </div>
                <button type="button" className="btn_arrow" />
              </div>
            )}
          </TableCell>
          <TableCell>
            <input type="text" placeholder="입력하세요." />
          </TableCell>
          <TableCell style={{ flex: 3 }}>
            <input type="text" placeholder="입력하세요." />
          </TableCell>
          <TableCell style={{ flex: '1.5' }}>
            <div className="in_box type_between">
              <SelectField defaultValue={1} style={{ maxWidth: '105px' }}>
                <Option value={1}>수동등업</Option>
                <Option value={2}>전체</Option>
                <Option value={3}>참여 프로젝트</Option>
              </SelectField>
              <div className="btn_box">
                <AddButton />
                <RemoveButton />
              </div>
            </div>
          </TableCell>
        </div>
        <div className="row last_row">
          <TableCell style={{ paddingRight: 50, fontWeight: 'bold' }} ellipsis>
            자동등업 기준
          </TableCell>
          <TableCell>
            <p>출석</p>
            <Stepper />
          </TableCell>
          <TableCell>
            <p>등록게시글</p>
            <Stepper />
          </TableCell>
          <TableCell>
            <p>등록 댓글</p>
            <Stepper />
          </TableCell>
        </div>
      </div>
    </Table>
  );
};

export default GradeListSection;
