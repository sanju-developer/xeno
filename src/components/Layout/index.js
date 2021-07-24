import React from 'react';
import Header from '../Header';

import './index.scss'

function Layout(Component) {
    return () => {
        return (
            <>
                <Header />
                <div className="layout-spacing">
                    <Component />
                </div>
            </>
        );
    }
}

export default Layout;