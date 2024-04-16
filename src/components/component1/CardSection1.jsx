import React from 'react'
import cardsection1css from '../css/CardSection1.module.css'
import {  useNavigate } from 'react-router-dom'

function CardSection1({children}) {
  const navigate = useNavigate();
  return (
    <>
      <div  className={cardsection1css.container}>
        <div className={cardsection1css.heading}>

 <div className={cardsection1css.heading1}><h2>Find Your Best Deal <br /> Right Now!</h2></div>
 <div className={cardsection1css.card1}>



<button className={cardsection1css.button} onClick={()=>navigate('appartment')}>Appartment</button>
&nbsp; &nbsp;
<button className={cardsection1css.button} onClick={()=>navigate('villa')}>Villa</button>
&nbsp; &nbsp;
<button  className={cardsection1css.button} onClick={()=>navigate('penthouse')}>PentHouse</button>
</div>
</div>

{children}
      </div><br /><br /> 




    </>
  )
}

export default CardSection1
