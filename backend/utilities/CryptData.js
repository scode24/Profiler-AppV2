import cryptojs from "crypto-js";

const key = process.env.CRYPT_KEY;

const encrypt = (data) => {
  return cryptojs.AES.encrypt(data, key).toString();
};

const decrypt = (data) => {
  const bytes = cryptojs.AES.decrypt(data, key);
  return JSON.parse(bytes.toString(cryptojs.enc.Utf8));
};

export { encrypt, decrypt };
