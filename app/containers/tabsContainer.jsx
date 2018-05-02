import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import CircularProgress from 'material-ui/CircularProgress';

import TabView from 'components/explorer/tabView';
import TabActions from 'actions/tab';
import {
    getTabByIdFromTabsSelector,
    getTabByIdSelector,
    getParams
} from 'selectors/tab';

class TabsContainer extends PureComponent {
    componentWillMount() {
        const { getTabById, id, tab } = this.props;

        if (!tab) {
            if (id) {
                getTabById(id);
            } else {
                const { id: paramId } = getParams(this.props);
                getTabById(paramId);
            }
        }
    }

    render() {
        const { tab } = this.props;

        if (!tab) {
            return <CircularProgress size={80} thickness={7} />;
        }

        return <TabView tab={tab} />;
    }
}

const mapStateToProps = (state, props) => {
    let tab = getTabByIdFromTabsSelector(state, props);
    if (!tab) {
        tab = getTabByIdSelector(state, props);
    }
    return { tab };
};

export default connect(mapStateToProps, {
    getTabById: TabActions.getTabById
})(TabsContainer);
