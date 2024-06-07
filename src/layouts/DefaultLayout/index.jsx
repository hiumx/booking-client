import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'
import Footer from '../components/Footer'
import "./_default_layout.scss";
import Banner from '~/components/Banner'
import Contact from '../components/Contact';
import { CONTACTS } from '~/constants';


const DefaultLayout = ({ children }) => {

    return (
        <div className='default__layout__wrapper'>
            <div className='default__layout__hb'>
                <Header />
                <Banner />
            </div>
            {children}
            <Contact contacts={CONTACTS}/>
            <Footer />
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node
}

export default DefaultLayout
