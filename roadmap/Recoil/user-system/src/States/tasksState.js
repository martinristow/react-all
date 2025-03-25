import {atom} from "recoil";
import userStateEffect from "../Effects/userStateEffect.js";

export const tasksState = atom({
    key: "tasksState",
    default: [],
    effects_UNSTABLE: [
        userStateEffect
    ]
})
