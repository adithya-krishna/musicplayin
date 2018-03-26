import React, { PureComponent, Fragment } from 'react';
import classnames from 'classnames';

import theme from './container.scss';

class Container extends PureComponent {
    render() {
        const { children, className } = this.props;
        return (
            <Fragment>
                <div className={classnames(theme.container, className)}>
                    {children}
                </div>
            </Fragment>
        );
    }
}

export default Container;
