
import './App.css';
import { useState } from 'react';
import SideBar from './Components/Sidebar/SideBar';
import Packet from './Components/Packet/Packet';
import Popup from './Components/Popup/Popup';
import Massage from './Components/Massage/Massage';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [groups, setGroups] = useState([]);

  const [selectedGroup, setSelectedGroup] = useState("");

  const showMsg =(group)=>{
    setSelectedGroup(group)
  }

  const togglePopup =()=>{
    setPopupVisible(!isPopupVisible);
  }

  const addGroup =(group)=>{
    setGroups([...groups, group]);
    togglePopup()
  }
  return (
    <>
    <div className="app">
      <SideBar groups={groups} showPopup={togglePopup} showMsg={showMsg} />
      {!selectedGroup ? (
         <Packet/>
        
      ): (
        <Massage group={selectedGroup}/>
      )
  }
      {isPopupVisible && <Popup onAddGroup={addGroup}/>}
    </div>
    </>
  );
}

export default App;
