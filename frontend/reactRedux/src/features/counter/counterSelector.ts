import { RootState } from "../../app/store";

export const selectCounterValue = (state: RootState) => state.counter.value;