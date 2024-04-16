import React from 'react'
import ImageSlider from './BScomponents/ImageSlider'
import Section2 from './components2/Section2'
import DemoComponent from './component1/DemoComponent'
import Counter from './component1/Counter'
import CardSection1 from './component1/CardSection1'
import { Outlet } from 'react-router-dom'
import Card from './component1/Card'
import FormMap from './component1/FormMap'
import Footer from './component1/Footer'







function Home() {
  return (
    <>
    
    <ImageSlider/><br /> <br />
    <Section2/>
    <DemoComponent/>
    <Counter/>
    <CardSection1>
    <Outlet/>
    </CardSection1>
   <Card/>
   <FormMap/>
   <Footer/>

   
    </>
  )
}

export default Home
