import React from 'react'
import './LeftContent.css'

const LeftContent = () => {
  return (
    <div className='leftcontents'>
      <div className='sides'>
        <h3 className='folder'>Folders</h3>
        <ul>
           <li className='active'>Inbox <span>2</span></li>
           <li>Junk email</li>
           <li>Drafts</li>
           <li>Sent home</li>
           <li>Delete home</li>
           <li>Active</li>
        </ul>
      </div>  
    </div>
  )
}

export default LeftContent