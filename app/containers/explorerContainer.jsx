import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Explorer from 'components/explorer/explorer';
import TabActions from 'actions/tab';

class ExplorerContainer extends PureComponent {
    componentWillMount() {
        const { getAllTabs } = this.props;
        getAllTabs();
    }

    render() {
        const { tabs } = this.props;
        return <Explorer tabs={tabs} />;
    }
}

const mapStateToProps = state => {
    // extract to a selector later
    let tabs = [];
    if (state && state.Tab && !isEmpty(state.Tab.payload)) {
        tabs = [...state.Tab.payload];
    }
    return { tabs };
};

export default connect(mapStateToProps, {
    getAllTabs: TabActions.getAllTabs
})(ExplorerContainer);
