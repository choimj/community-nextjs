import CryptoJS from 'crypto-js';
import { getToken } from './../api/common';
import { getLocation, createRandomString } from './common';
import { CookieType } from '../types_old/Auth';

/**
 * 비인증 시그니쳐 발급
 */
export const createSignature = async (url: string) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(url));
};

/**
 * 시그니쳐 생성
 */
export const getSignature = async () => {
  const endPoint = process.env.ENDPOINT ?? '';
  const unCertToken = await getToken(endPoint);
  return await createSignature(`${unCertToken}`);
};

// wehago sign 생성
export const createWehagoSign = (url: string, wehagoS: string, timestamp: string, transactionId: string) => {
  /**
   *  [1] 암호키를 만든다. 쿠키에 저장된 wehago_s(해시키)와 timestamp 를 sha256으로 해싱하여 암호화한다.
      [2] url+타임스탬프+트랜잭션 아이디를 합치고, 암호키로 hmac 암호화를 한다.
      [3] 헤더에 키로 wehago-sign, 값으로 [2]번에서 만든 암호화 값을 할당한다.      
   */
  const secret = wehagoS;
  let hashKey = secret;
  const location = getLocation(url);
  if (location) {
    const wehagoUrl = location.pathname + location.search;
    const sha256 = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(hashKey + timestamp));
    const base64 = CryptoJS.enc.Base64.stringify(sha256);
    const key = CryptoJS.enc.Utf8.parse(base64);
    const hash_data = wehagoUrl + timestamp + transactionId;

    const result = CryptoJS.HmacSHA256(hash_data, key);
    return result.toString(CryptoJS.enc.Base64);
  } else {
    return '';
  }
};

export const getAuthHeader = (url: string, cookie: CookieType) => {
  const { token, cno, wehagoS } = cookie;
  const timestamp = Math.floor(new Date().getTime() / 1000).toString();
  const transactionId = createRandomString(10);
  const wehagoSign = createWehagoSign(url, wehagoS, timestamp, transactionId);

  const service = 'community';
  const _token = token ? `Bearer ${token}` : false;

  return {
    'transaction-id': transactionId,
    service,
    'wehago-sign': wehagoSign,
    timestamp,
    Authorization: _token,
    cno,
  };
};
