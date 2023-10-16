import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(ChannelDetail, videos);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh" sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            heigh: "300px",
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-110" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "10px" } }} />
        {/* change sm 100 for a better display */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
