import SNOW_HISTORY from '../constants';

const INIT_STATE = {
    snowHistory: SNOW_HISTORY,
};

export default function Reducer (state = INIT_STATE, action) {
    switch (action.type) {
        // whatever cases
        default:
            return state;
    }
};