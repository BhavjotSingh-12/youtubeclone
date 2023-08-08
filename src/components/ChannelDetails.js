import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&id&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(84,86,223,1) 12%, rgba(213,75,131,1) 82%, rgba(217,19,59,1) 93%)',
          zIndex: 10,
          height: '200px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-125px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
       
      </Box>
    </Box>
  )
}

export default ChannelDetails