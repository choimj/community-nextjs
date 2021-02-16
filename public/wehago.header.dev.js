/**
 * 위하고 인증(로그인)이 되어 있을경우 아래 코드가 실행된다.
 */
window.onload = function () {
  const wehagoHeader = document.createElement('div');
  wehagoHeader.id = 'app';
  document.body.appendChild(wehagoHeader);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://static.wehago.com/baseComponents/wehago.global.dev.js';
  document.body.appendChild(script);

  // 위하고 헤더가 그려지기 기다렸다가 비인증 헤더는 제거한다.
  setTimeout(() => {
    document.getElementById('nonAuthHeader').remove();
    document.getElementById('nonAuthLnb').remove();
  }, 500);
};
