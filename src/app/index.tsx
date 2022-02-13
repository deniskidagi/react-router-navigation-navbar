import React from 'react';
import {Helmet} from 'react-helmet'
import { BrowserRouter } from 'react-router-dom';
import '../index.css'
import Routers from './Routers'
import NavigationBar from './components/Navigation-bar';


export function App() {
  return (
    <BrowserRouter>
      <Helmet 
        titleTemplate='%s - React Boilerplate'
        defaultTitle="React BoilerPlate"
      >
        <meta name='description' content='A React Boilerplate Application'/>
      </Helmet>
      <NavigationBar/>
      <Routers/>
    </BrowserRouter>
  )
}