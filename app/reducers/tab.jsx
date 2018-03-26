import TabActions from 'actions/tab';

const initialState = {};

const tab = (state = initialState, action) => {
    switch (action.type) {
        case TabActions.FETCH_ALL_TABS_START: {
            console.log(action);
            return state;
        }
        case TabActions.FETCH_ALL_TABS_COMPLETE: {
            console.log(action);
            return state;
        }
        default:
            return state;
    }
};

export default tab;
