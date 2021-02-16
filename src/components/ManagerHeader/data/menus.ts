export const menus = [
  {
    name: '커뮤니티 관리',
    icon: 'content',
    path: 'community',
    submenu: [
      { name: '기본정보', path: 'info' },
      { name: '구독설정', path: 'subscribe' },
    ],
  },
  { name: '메뉴 관리', icon: 'folder', path: 'menu', submenu: [{ name: '게시판 관리', path: 'board' }] },
  {
    name: '컨텐츠 관리',
    icon: 'check',
    path: 'contents',
    submenu: [
      { name: '게시글 관리', path: 'posts' },
      { name: '댓글 관리', path: 'comments' },
      { name: '금칙어 설정', path: 'words' },
    ],
  },
  {
    name: '멤버 관리',
    icon: 'member',
    path: 'member',
    submenu: [
      { name: '전체멤버', path: 'member' },
      { name: '게시판관리자', path: 'auth' },
      { name: '활동중지/강제탈퇴', path: 'activity' },
      { name: '등급 관리', path: 'grade' },
    ],
  },
  {
    name: '커뮤니티 운영',
    icon: 'member',
    path: 'operation',
    submenu: [
      { name: '메일/쪽지보내기', path: 'send' },
      { name: '통계', path: 'statistics' },
    ],
  },
  {
    name: '꾸미기',
    icon: 'member',
    path: 'decoration',
    submenu: [
      { name: '레이아웃 설정', path: 'layout' },
      { name: '대문 꾸미기', path: 'door' },
      { name: '메인 꾸미기', path: 'main' },
      { name: '스킨', path: 'skin' },
    ],
  },
];
