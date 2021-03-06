import React from 'react';
import { zip_longest } from 'zip-array';

function RoomText(props) {
  const textChars = props.text.split('');
  const keystrokeHistory = props.keystrokeHistory;

  const textHighlight = zip_longest(textChars, keystrokeHistory).map((charAndHistory, index) => {
    const char = charAndHistory[0];
    const history = charAndHistory[1];

    if (history === undefined) {
      return <span key={index}>{char}</span>

    } else if (history.correct) {
      if (char === ' ') {
        return <span key={index} style={{backgroundColor: 'green'}}>{char}</span>
      } else {
        return <span key={index} style={{color: 'green'}}>{char}</span>
      }
    } else {
      if (char === ' ') {
        return <span key={index} style={{backgroundColor: 'red'}}>{char}</span>
      } else {
        return <span key={index} style={{color: 'red'}}>{char}</span>
      }
    }
  })

  return (
    <p>
      {textHighlight}
    </p>
  );
}

export default RoomText;