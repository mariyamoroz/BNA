import React from 'react';
import Header from '../components/default/Header.tsx';
import HeaderMobile from '../components/mobile/HeaderMobile.tsx';

import defineCurrentBreakpoint from '../../helpers/utils.ts';

import '../styles/header.css';
import '../styles/navigation.css';

function HeaderContainer(): JSX.Element {
    const isMobile = defineCurrentBreakpoint() === 'xs';

    return isMobile ? <HeaderMobile /> : <Header />
}

export default HeaderContainer;