import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {
    return (
        <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="start">
            {videos.map((item, id) => (
               <Box key={id}>
                    {item.id.videoId && <VideoCard videoDetail={item}/>}
                    {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
               </Box> 
            ))}
        </Stack>
    )
}

export default Videos;