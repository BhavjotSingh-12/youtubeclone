
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import './App.css';
import { Navbar, Feed, VideoDetails, SearchFeed, ChannelDetails} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Feed/>}/>
      <Route path="/video/:id" element={<VideoDetails/>}/>
      <Route path="/channel/:id" element={<ChannelDetails/>}/>
      <Route path="/search/:searchTime" element={<SearchFeed/>}/>
    </Routes>
      </Box>
    </BrowserRouter>
  );
}


export default App;
