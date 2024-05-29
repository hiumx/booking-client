import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "./_default_layout.scss";

import Banner from '~/components/Banner'

const DefaultLayout = ({ children }) => {

  return (
    <div className='default__layout__wrapper'>
      <div className='default__layout__hb'>
        <Header />
        <Banner />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
