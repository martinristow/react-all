import {atom} from "recoil";
import {localStorageEffect} from "../Effects/localStorageEffect.js";


export const tasksState = atom({
    key: "tasksState",
    default: [],
    effects_UNSTABLE: [
        localStorageEffect("userTasks")
    ]
})
