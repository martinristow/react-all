import {atom} from "recoil";
import localStorageEffect from "../Effects/localStorageEffect.js";


export const userState = atom({
    key: 'userState',
    default: {},
    effects_UNSTABLE: [
    localStorageEffect()
    ],
});