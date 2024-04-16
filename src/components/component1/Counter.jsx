import React from 'react'
import countercss from '../css/Counter.module.css'
import CountUp from 'react-countup'


function Counter() {

  return (
    <>
      <div className={countercss.counter}>


        <CountUp
          end={34}
          duration={2}
        />
       
       
        <CountUp
          end={12}
          duration={2}
        />

        <CountUp
          end={24}
          duration={2}
        />

<CountUp
          end={14}
          duration={2}
        />
      </div>


    </>
  )
}

export default Counter
