import React from 'react'
import NextPlanIcon from '@mui/icons-material/NextPlan';  
import Image1 from '../image/f5.jpg'

const Pin = ({pinSize, imgSrc, name, link}) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt=''  className='mainPic'/>
      <div className='content'>
        <h3>{name}</h3>
        <div className='Search'>
            <a href={link}>
             <NextPlanIcon/>
             </a>
          </div>
      </div>
    </div>
  )
}

export default Pin
