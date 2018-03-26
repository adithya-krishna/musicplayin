import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Explorer from 'components/explorer/explorer';
import TabActions from 'actions/tab';

class ExplorerContainer extends PureComponent {
    componentWillMount() {
        const { getAllTabs } = this.props;
        getAllTabs();
    }

    render() {
        return <Explorer />;
    }
}

const mapStateToProps = (state, props) => {
    return { ...state };
};

export default connect(mapStateToProps, {
    getAllTabs: TabActions.getAllTabs
})(ExplorerContainer);
