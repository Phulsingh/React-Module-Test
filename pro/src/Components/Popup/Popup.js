
import React,  {useState} from 'react'
import './Popup.css'
function Popup({onAddGroup}) {

  const [groupName, setGroupName] = useState("");
  const [groupColor, setgroupColor] = useState("#43E6FC");

  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const handleCreateClick =()=>{
    if (groupName.trim()) {
      onAddGroup({ name: groupName, color: groupColor });
      setGroupName('');
    }
  }

  return (
    <div className="Popup">
    <div className="popup">
      <p className="create">Create New Group</p>
      <div className="choosetext">
        <p>Group Name</p>
        <input
          type="text"
          placeholder="Enter group name"
          className='input-first'
          value={groupName}
          onChange={(e)=> setGroupName(e.target.value)}
        />
      </div>
      <div className="chooseColor">
        <p>Choose color</p>
        
        {colors.map((color, index) => (
            <div
              key={index}
              className="colorCircle" 
              style={{
                backgroundColor: color,
                border: groupColor === color ? '2px solid black' : 'none'
              }}
              onClick={() => setgroupColor(color)}
            />
          ))}

      </div>
      <button className="btn1" onClick={handleCreateClick}>Create</button>
    </div>
  </div>
  )
}

export default Popup
