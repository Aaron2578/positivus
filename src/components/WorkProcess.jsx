import React from 'react'
import Headings from './Headings'
import Working_Card from './Working_Card'

function WorkProcess() {
    return (
        <div>
            <Headings
                head={'Our Working Process'}
                sub1={'Step-by-Step Guide to Achieving'}
                sub2={'Your Business Goals'} />
            <Working_Card />
        </div>
    )
}

export default WorkProcess