import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import '../text-area/text-area.css';

const TextArea = ({ startTimer, handleKeyDown, textInput, currentInput, handleChange, status }) => {
  return (
    <div className='text-area'>
    <TextareaAutosize
      className='area'
      aria-label="maximum height"
      placeholder="You can type here"
      style={{ height: 200 }}
      onKeyDown={handleKeyDown}
      value={currentInput}
      onChange={handleChange}
      ref={textInput}
      disabled={status !== "started" || status === "finished"}
    />
    <br />
    <div className='button-container'>
      <button className='button-container' onClick={startTimer}>START...</button>
    </div>
    </div>
  );
}

export default TextArea;

