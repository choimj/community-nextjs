import axios from 'axios';
/**
 * 비인증 시그니쳐 발급
 */
export const getToken = (endPoint: string) => {
  const apiUrl = `${process.env.UNAUTH_API_URL}/get_token/?url=${endPoint}`;
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(apiUrl);
      resolve(`${endPoint}${data.cur_date}${data.token}`);
    } catch (error) {
      reject(new Error(error));
    }
  });
};
