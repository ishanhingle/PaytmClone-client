import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom}=recoilPersist();
export const currUser=atom({
    key:"currUser",
    default:null,
    effects_UNSTABLE:[persistAtom]
})
