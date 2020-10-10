import React from 'react';

import './search-box.style.css';

// functional components mainly are used to use props and get some html; they usually dont have access to the MediaStreamTrackAudioSourceNode.
// ⚠️⚠️⚠️⚠️setState 是asynchronous(异步的), 为了让动作保持一致, 其他动作要直接写在setState的第二个props处, 而不是setState外面 
export const Searchbox = ({ placeholder, handleChange }) => (
    <input 
    className = 'search'
    type='search'
    placeholder= { placeholder }
    onChange = { handleChange }
   />  
);

//单独写search-box component是为了让我们可以reuse search box, huge advantage of react