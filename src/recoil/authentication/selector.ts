import { selector } from "recoil";
import { authState } from "./atom";

export const authSelectKey = "authStats"

export const authSelector = selector({
  key: authSelectKey,
  get: ({ get }) => get(authState),
});
