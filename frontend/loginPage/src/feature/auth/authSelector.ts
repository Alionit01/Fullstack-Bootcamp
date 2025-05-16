import type { RootState } from '../../App/store';

export const selectTokenValue = (state: RootState) => state.auth.token;