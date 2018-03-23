import React, { PureComponent } from 'react';

import theme from './section.scss';

class Section extends PureComponent {
    render() {
        const { children } = this.props;
        return <div className={theme.section}>{children}</div>;
    }
}

export default Section;
