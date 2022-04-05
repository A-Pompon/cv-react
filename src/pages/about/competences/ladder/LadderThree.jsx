import React from 'react'
import './ladder.css'
import {BsHexagonFill,BsHexagonHalf} from 'react-icons/bs'

const LadderThree = () => {
  return (
    <div>
        <BsHexagonFill className='ladder-icon'/>
        <BsHexagonFill className='ladder-icon'/>
        <BsHexagonFill className='ladder-icon'/>
        <BsHexagonFill className='ladder-icon'/>
        <BsHexagonHalf className='ladder-icon'/>
    </div>
  )
}

export default LadderThree