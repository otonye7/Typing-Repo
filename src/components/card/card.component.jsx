import * as React from 'react';
import Card from '@mui/material/Card';
import '../card/card.css';
import CardContent from '@mui/material/CardContent';

const CardComponent = ({ words }) => {
  return (
    <div className='card'>
    <Card style={{backgroundColor: "white"}} sx={{ minWidth: 330 }}>
      <CardContent>
         {
           words.map((word, i) => (
             <>
             <span>
                 {word} 
             </span>
             <span> </span>
             </>
         ))
       }
      </CardContent>
    </Card>
    </div>
  );
}

export default CardComponent    
