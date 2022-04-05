import React from 'react'
import './ladder.css'
import {BsHexagonFill,BsHexagon} from 'react-icons/bs'

const LadderBasic = () => {
    return (
        <div>
            <BsHexagonFill className='ladder-icon' />
            <BsHexagonFill className='ladder-icon' />
            <BsHexagonFill className='ladder-icon' />
            <BsHexagon className='ladder-icon' />
            <BsHexagon className='ladder-icon' />
        </div>
      )
}

export default LadderBasic