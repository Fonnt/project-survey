import React from 'react';

// eslint-disable-next-line max-len
const UserInput = ({ userInput, setUserInput, headerText, subHeaderText, onEnter, placeHolder }) => {
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  }
  return (
    <div className="input-field">
      <h2 className="sub-header">{headerText}</h2>
      <h3 className="question-title">{subHeaderText}</h3>
      <input
        className="input-box"
        placeholder={placeHolder}
        value={userInput}
        type="text"
        onChange={handleUserInputChange}
        required="required"
        onKeyPress={onEnter}
      />
    </div>
  )
}

export default UserInput