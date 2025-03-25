import {useRecoilValue} from "recoil";

const localStorageEffect = () => ({setSelf, onSet}) => {
    const savedValues = localStorage.getItem("userTasks");

    if (savedValues !== null) {
        setSelf(JSON.parse(savedValues));
    }

    onSet(newValue => {
        localStorage.setItem("userTasks", JSON.stringify(newValue));
    })

}

export default localStorageEffect()