import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '../button/button.component';
import '../text-area/text-area.css';

const TextArea = () => {
  return (
    <div className='text-area'>
    <TextareaAutosize
      className='area'
      aria-label="maximum height"
      placeholder="You can type here"
      style={{ height: 200 }}
    />
    <div className='button-container'>
      <Button>START...</Button>
    </div>
    </div>
  );
}

export default TextArea;

