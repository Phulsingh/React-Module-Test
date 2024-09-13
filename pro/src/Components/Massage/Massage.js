
import React ,{useState} from 'react'
import './Massage.css'


function Massage({group}) {
  // State to store the input value and the submitted text
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  

   // Handler for input change
   const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

   // Handler for sending the text
   const handleSendClick = () => {
    setSubmittedText(inputText);  // Update the submitted text
    setInputText('')
  };

  return (
    <>
    <div className='message-conainer'>
      <div className='grop-header'>
      <span style={{ backgroundColor: group.color }} className="groupCircle">{group.name[0].toUpperCase()}</span>
      <h1 className='h1'>{group.name[0].toUpperCase()}{ group.name.substring(1)}</h1>
      </div>
      <div className='showMsg'>
        <ul>
          <li>
          {submittedText}
          </li>
        </ul>
      </div>
      <div className='input-field'>
        <div className='text-input'>
            <input type='text'
             className='text-field'
             value={inputText}
             onChange={handleInputChange}
            ></input>
            <button className='send-massage' onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Massage
