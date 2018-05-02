import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

//shift to different position
export const getParams = props => {
    if (props.match && props.match.params) {
        return props.match.params;
    }
    return {};
};

export const getTabByIdFromTabsSelector = (state, props) => {
    const { Tab } = state;
    const { id } = getParams(props);
    if (!Tab.allTabs || !id) {
        return null;
    }

    return filter(Tab.allTabs, Tab => Tab._id === id)[0];
};

export const getTabByIdSelector = (state, props) => {
    return state && state.Tab && !isEmpty(state.Tab.tab) ? state.Tab.tab : null;
};
