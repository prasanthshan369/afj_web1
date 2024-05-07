"use client";
import React from 'react';
import 'react-tabs/style/react-tabs.css';

import Header from '../components/Header'
import Landing from '@/components/Landing'
import BusinessServices from '@/components/BusinessServices'
import Contact from '@/components/Contact'
import RecentCases from '@/components/RecentCases'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import Customers from '@/components/Customers'
import Blog from '@/components/Blog'
import Team from '@/components/Team'
import ScrollToTopButton from '@/components/ScrollToTopButton'


const page = () => {
  return (
    <div className='w-full justify-center items-center'>
      <Header/>
      <Landing/>
      <BusinessServices/>
      <Services/>
      <RecentCases/>
      <Team/>
      <Blog/>
      <Customers/>
      <Contact/>
      <Footer/>
      <div>
        <ScrollToTopButton/>
      </div>
    </div>
  )
}

export default page