import React from 'react';
import { TreeView, TreeItem, EditTreeItem, LineItem, TreeGroup } from '../TreeView';

const MenuTree = (): React.ReactElement => {
  return (
    <TreeView>
      <TreeItem title="공지사항" iconClass="ico_set" />
      <TreeItem title="최신글 보기" iconClass="ico_set" />
      <TreeItem title="인기글 보기" iconClass="ico_set" />
      <TreeItem title="이슈글 보기" iconClass="ico_set" />
      <EditTreeItem placeholder="변경해주세요." iconClass="ico_set" />
      <LineItem />
      <TreeItem title="그룹A" group iconClass="ico_set">
        <TreeGroup>
          <TreeItem title="게시판A" iconClass="ico_set" />
          <TreeItem title="게시판B" iconClass="ico_set" />
          {/* <EditTreeItem placeholder="변경해주세요." disabled /> */}
        </TreeGroup>
      </TreeItem>
    </TreeView>
  );
};

export default MenuTree;
