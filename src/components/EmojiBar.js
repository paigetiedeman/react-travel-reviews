import Picker from 'emoji-picker-react';
import React, {useState} from 'react';
import { Chip } from '@mui/material';
import { AddReaction } from '@mui/icons-material';


export default function EmojiBar() {
  const [chosenEmojis, setChosenEmojis] = useState([]);
  const [pickerVisible, setPickerVisible] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    const emojiWithCounter = {...emojiObject, counter:1}
    //loop through, test if an emoji has the same unified code, if so, increment a .counter property on it, else add to the end with a counter of one
    //includes approach
    // if (chosenEmojis.some(e=> e.unified === emojiObject.unified)){
    //   let newEmoji = chosenEmojis.filter(emoji => emoji.unified === emojiObject.unified)[0];
    //   newEmoji.counter++
    //   let newArray = chosenEmojis.slice(indexOf(emojiObject)).push(newEmoji)
    //   setChosenEmojis(newArray);
    // } else {
    //   let newArray = [ ...chosenEmojis, {...emojiObject, counter:1} ];
    //   setChosenEmojis(newArray)
    // }

    //loop approach
    let chosenEmojisCopy = [...chosenEmojis];
    // const chosenEmojisCopy = chosenEmojis.slice()
    if (!chosenEmojis.some(emoji => emoji.unified === emojiObject.unified)) {
      chosenEmojisCopy = [...chosenEmojis, emojiWithCounter];
    } else {
      const index = chosenEmojis.findIndex(emoji => emoji.unified === emojiObject.unified)
      const incrementedEmoji = {...chosenEmojisCopy[index], counter: chosenEmojisCopy[index].counter + 1}
      chosenEmojisCopy[index] = incrementedEmoji;
    }
    chosenEmojisCopy = chosenEmojisCopy.sort((a, b) => {
      return b.counter - a.counter;
    })
    setChosenEmojis(chosenEmojisCopy);
    console.log(chosenEmojis);
  }
  
  return (
    <div>{chosenEmojis.length ? (chosenEmojis.map((chosenEmoji) => {
          return <span key={chosenEmoji.unified}><Chip label={`${chosenEmoji.emoji} ${chosenEmoji.counter}`} /></span>
        })
      ) : (
        <span>No emoji Chosen</span>
      )}
      <span><AddReaction onClick={()=> setPickerVisible(!pickerVisible)}/>{pickerVisible ? <Picker pickerStyle={{display:'inline'}} onEmojiClick={onEmojiClick} /> : null}</span>
    </div>
  )
}
// sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}
// npm install @mui/icons-material