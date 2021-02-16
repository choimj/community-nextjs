import Head from 'next/head';

/**
 * 위하고 헤더
 */
const WehagoHeader = ({ auth }: { auth: boolean }) => {
  const mode = process.env.MODE;
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/css/nanumsquare.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/css/common.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/css/gnb.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/css/lux.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/css/svc/cmt.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/selene/selene.css" />
        <link rel="stylesheet" type="text/css" href="https://static.wehago.com/diana/diana.css" />
        {auth && <script src={`/wehago.header${mode === 'DEVELOPMENT' && '.dev'}.js`} />}
      </Head>

      <div id="nonAuthHeader" className="header">
        <div className="horizon_header wehago_header">
          <div className="main_title">
            <h1>
              <a href="#">
                <img src="https://static.wehago.com/imgs/common/wehago_b.svg" width={109} height={22} alt="WEHAGO" />
              </a>
            </h1>
          </div>
        </div>
      </div>

      <div id="nonAuthLnb" className="lnb">
        <div className="lnbin wehago_header" style={{ overflow: 'hidden', width: 'auto', height: '100%' }}>
          <div className="bdbx">
            <ul className="lnb_root v3">
              <li className="lnb_menu_full">
                <a href="#main" className="lnb_lnk">
                  <img src="https://static.wehago.com/imgs/common/wehago_w.svg" width={109} height={22} alt="WEHAGO" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WehagoHeader;
