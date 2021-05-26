import React, { useState } from 'react';
import { Search, Input, Button } from './styles';
import { MdSearch } from 'react-icons/md'


export default function SearchBox({ placeholder, handleSearch }) {
  const [text, setText] = useState('');
  function _handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch(text)
    }
  }
  return (
    <Search onKeyDown={_handleKeyDown}>
      <Input
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={() => handleSearch(text)}><MdSearch size={'1.8em'} /></Button>
    </Search>
  );
}
