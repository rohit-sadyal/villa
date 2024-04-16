import React from 'react'
import Propertiescss from '../components/css/Propertiescard.module.css'

import {  useNavigate } from 'react-router-dom'
import Footer from './component1/Footer';

function Propertiescard({children}) {
    const navigate = useNavigate();
  return (
    <>
       <div  className={Propertiescss.container}>
        <div className={Propertiescss.heading}>


 <div className={Propertiescss.card1}>
    
<button className={Propertiescss.button} onClick={()=>navigate('ShowAll')}>ShowAll</button>
&nbsp; &nbsp;
<button className={Propertiescss.button} onClick={()=>navigate('Apartment')}>Apartment</button>
&nbsp; &nbsp;
<button className={Propertiescss.button} onClick={()=>navigate('VillaHouse')}>VillaHouse</button>
&nbsp; &nbsp;
<button  className={Propertiescss.button} onClick={()=>navigate('Penth')}>Penth</button>

</div>
</div>

{children}
      </div><br /><br /><br /><br />

      <Footer/> 
    </>



  )
}

export default Propertiescard
