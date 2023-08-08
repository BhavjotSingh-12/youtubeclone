import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <Paper component="form" onSubmit={HandleOnSubmit} value={searchTerm}
    sx = {{border: '1px solid #e3e3e3', borderRadius: 20, pl: 2, mr: {sm: 5}, boxShadow: 'none'}}>
    <input className='search-bar' placeholder='Search...' value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{border: 'none'}}/>
    <IconButton type="submit" sx ={{p: '10px',color: 'red'}} aria-label='search' >
      <Search/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar