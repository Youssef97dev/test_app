import React from 'react'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='panel'>
      <div className='panel-header'>
        INFOS
      </div>
      <div className='panel-body'>
        <div>300</div>
        <span>|</span>
        <div>15</div>
        <span>|</span>
        <div>25</div>
        <span>|</span>
        <div>100</div>
      </div>
    </div>
  )
}

export default Dashboard