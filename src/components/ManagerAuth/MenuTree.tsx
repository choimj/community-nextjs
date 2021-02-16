import React from 'react';
import { TreeView, TreeItem, LineItem, TreeGroup } from '../TreeView';

const MenuTree = (): React.ReactElement => {
  return (
    <TreeView>
      <TreeItem title="공지사항" />
      <TreeItem title="최신글 보기" />
      <TreeItem title="인기글 보기" />
      <TreeItem title="이슈글 보기" />
      <LineItem />
      <TreeItem title="그룹A" group>
        <TreeGroup>
          <TreeItem title="게시판A" />
          <TreeItem title="게시판B" />
          {/* <EditTreeItem placeholder="변경해주세요." disabled /> */}
        </TreeGroup>
      </TreeItem>
    </TreeView>
  );
};

export default MenuTree;
