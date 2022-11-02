import type { NextPage } from 'next';
import { SEO } from '../components/SEO';

import React, { useEffect } from "react";
import Router from 'next/router'

const Home: NextPage = () => {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/claymorphism')
    }
  });
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS'
        description='Free CSS Generator. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators.'
      />
    </>
  );
};

export default Home;
