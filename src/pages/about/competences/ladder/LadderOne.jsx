import React from 'react'
import './ladder.css'
import {BsHexagonFill,BsHexagonHalf,BsHexagon} from 'react-icons/bs'

const LadderOne = () => {
  return (
    <div>
        <BsHexagonFill className='ladder-icon' />
        <BsHexagonFill className='ladder-icon' />
        <BsHexagonFill className='ladder-icon' />
        <BsHexagonHalf className='ladder-icon' />
        <BsHexagon className='ladder-icon' />
    </div>
  )
}

export default LadderOne