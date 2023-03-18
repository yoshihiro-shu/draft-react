import { atom } from "recoil";

export const authKey = "auth"

/**
 * ログイン情報
 */
export const authState = atom({
  key: authKey,
  // 初期値
  default: {
    "access_token": "",
    "refresh_token": "",
  },
});
