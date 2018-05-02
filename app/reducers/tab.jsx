import TabActions from 'actions/tab';

const initialState = { fetchingTabs: false };

const tab = (state = initialState, action) => {
    switch (action.type) {
        case TabActions.FETCH_ALL_TABS_START: {
            return { ...state, fetchingTabs: true };
        }
        case TabActions.FETCH_ALL_TABS_COMPLETE: {
            return { ...state, fetchingTabs: false, allTabs: action.payload };
        }
        case TabActions.FETCH_TAB_BY_ID_START: {
            return { ...state, fetchingTabById: true };
        }
        case TabActions.FETCH_TAB_BY_ID_COMPLETE: {
            return {
                ...state,
                fetchingTabById: false,
                tab: action.payload
            };
        }

        default:
            return state;
    }
};

export default tab;
