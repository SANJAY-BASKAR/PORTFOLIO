import React from 'react'
import "../styles/Who.css"
import Typewriter from 'typewriter-effect'

function Who() {
  return (
    <div className='who'>
      <div className='background__text'>            
        <p className='simply__text'>SANJAY BASKAR</p>   {/*WEB ENTHUSIAST || ASPIRANT */}

            <p className='big__text'> WEB&nbsp;
            <Typewriter
                    options={{
                        strings: ['   DEVELOPER', '   DESIGNER'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </p>     {/*WEB DEVELOPER || DESIGNER */}
      </div>
    </div>
  )
}

export default Who
