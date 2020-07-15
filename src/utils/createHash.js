import md5 from 'md5';

const privateKey = '1db495e6c95764dd6cea3d7324eadaffc186782e';
const publicKey = 'a50eb346a09eb921b7a88826f1ad6a09';

export default function createHash(timeStamp) {
  const toBeHashed = timeStamp + privateKey + publicKey;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}
