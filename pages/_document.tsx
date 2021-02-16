import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="p3p" content='CP="CAO DSP AND SO " policyref="/w3c/p3p.xml"' />
          <meta name="keywords" content="WEHAGO" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="기업이 필요한 다양한 서비스 - 위하고" />
          <meta
            property="og:description"
            content="위하고에서 자동화된 회계 처리부터 협업에 필요한 서비스까지 기업에 필요한 다양한 업무 환경을 만나보세요"
          />
          <meta property="og:url" content="https://www.wehago.com" />
          <meta property="og:image" content="https://static.wehago.com/imgs/common/wehago_og.png" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="cache-control" content="no-store, no-cache, must-revalidate" />
          <meta httpEquiv="Pragma" content="no-store, no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta name="description" content="위하고에서 자동화된 회계 처리부터 협업에 필요한 서비스까지 기업에 필요한 다양한 업무 환경을 만나보세요" />
          <meta name="author" content="" />
          <link rel="apple-touch-icon" sizes="57x57" href="https://static.wehago.com/imgs/common/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://static.wehago.com/imgs/common/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://static.wehago.com/imgs/common/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://static.wehago.com/imgs/common/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://static.wehago.com/imgs/common/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://static.wehago.com/imgs/common/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://static.wehago.com/imgs/common/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://static.wehago.com/imgs/common/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://static.wehago.com/imgs/common/favicons/apple-icon-180x180.png" />
          <link rel="shortcut icon" href="https://static.wehago.com/imgs/common/favicons/favicon.ico?v2" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="https://static.wehago.com/imgs/common/favicons/ms-icon-144x144.png" />
          <meta name="msapplication-config" content="https://static.wehago.com/imgs/common/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <link type="text/css" rel="stylesheet" href="https://static.wehago.com/selene/selene.css" />
          <link type="text/css" rel="stylesheet" href="https://static.wehago.com/diana/diana.css" />
          <link type="text/css" rel="stylesheet" href="https://static.wehago.com/dist/wehago_common.css" />
          <link type="text/css" rel="stylesheet" href="http://172.16.114.131/css/svc/cmt.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
