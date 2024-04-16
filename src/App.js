import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Properties from './components/Properties'
import Contact from './components/Contact'
import PropertyDetail from './components/PropertyDetail';
import Navbar from './components/Navbar'
import Header from './components/component1/Header'
import AppartmentComp from './components/component1/AppartmentComp';
import VillComp from './components/component1/VillComp';
import PentHouseComp from './components/component1/PentHouseComp';
import ShowAll from './components/components2/ShowAll';
import Apartment from './components/components2/Apartment';
import VillaHouse from './components/components2/VillaHouse';
import Penth from './components/components2/Penth';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
       
        <Route path='/' element={<Home />}>
          <Route index element={<AppartmentComp />} />
          <Route path='appartment' element={<AppartmentComp />} />
          <Route path='villa' element={<VillComp />} />
          <Route path='penthouse' element={<PentHouseComp />} />
        </Route>

        <Route path='/properties' element={<Properties />} >
        <Route index element={<ShowAll/>}/>
        <Route path='ShowAll' element={<ShowAll/>}/>
        <Route path='Apartment'element={<Apartment/>}/>
        <Route path='VillaHouse'element={<VillaHouse/>}/>
        <Route path='Penth' element={<Penth/>}/>

        </Route>
        <Route path='/propertyDetail' element={<PropertyDetail />} >
        <Route index element={<AppartmentComp />} />
          <Route path='appartment' element={<AppartmentComp />} />
          <Route path='villa' element={<VillComp />} />
          <Route path='penthouse' element={<PentHouseComp />} />
        </Route>

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
