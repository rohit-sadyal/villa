import React from 'react'
import propertiescss from '../components/css/Properties.module.css'
import Propertiescard from './Propertiescard'
import { Outlet } from 'react-router-dom'

function Properties() {
  return (
    <>
<div className={propertiescss.div1}>

<p>HOME / PROPERTIES</p>
<h1>PROPERTIES</h1>

</div><br /><br /><br />
<Propertiescard>
  <Outlet/>
</Propertiescard>


    </>
  )
}

export default Properties

