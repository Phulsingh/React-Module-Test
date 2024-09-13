
import React from 'react'
import './sidebar.css'

function SideBar({showPopup, groups,showMsg}) {

  return (
    <>
    <div className="sidebar">
      <div>
        <h1>Packet Notes</h1>
        <ul className='ul'>
        {groups.map((group, index) => (
          <li key={index} onClick={()=> showMsg(group)}>
            <span style={{ backgroundColor: group.color }} className="groupCircle">{group.name[0].toUpperCase()}</span>
            <span className="groupName">
            {group.name[0].toUpperCase()}{ group.name.substring(1)}
            </span>
          </li>
        ))}
      </ul>
        </div>
        <button onClick={showPopup} className='sidebtn'>
          +
        </button>
        </div>
    </>
  )
}

export default SideBar
