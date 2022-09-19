import React, { useEffect } from 'react'
import './Rewards.css'
import Aos from 'aos'
const Rewards = () => {
  useEffect(()=>{
    Aos.init({duration:1100})
  },[])
  return (
    <div className='rewards_main' id='Rewards'>
      <div data-aos="zoom-in" className="rewards_container">
        <div className="reward_title">Rewards</div>
        <div className="reward_price_box">
          
          <p>Prizes Worth</p>
          <span className='reward_money'>₹1,00,000</span>
          <div><p>for the first three teams</p></div>
        </div>
        <div className="rewards_list">
          <ul>
          <li className='reward_list_item'>Fellowship From Pehia For Top-Performing Teams.</li>
          <li className='reward_list_item'>Certificate of Participation</li>
           <li className='reward_list_item'>Socially Relevent Projects can Avail Upto 50 KTU Activity Point</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rewards