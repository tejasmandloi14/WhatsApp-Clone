import React, { useState } from 'react'
import LeftHeader from './LeftHeader'
import Search from './Search'
import Conversations from '../Conversations'

export default function Left() {

  const [text,setText] = useState('');
  
  return (
    <>
    <LeftHeader/>
    <Search setText={setText}/>
    <Conversations text={text}/>
    </>
  )
}
