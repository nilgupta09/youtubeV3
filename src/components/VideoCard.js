import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'

const VideoCard= ({videoDetail}) => {
    
    const {id:{videoId}, snippet} = videoDetail;
    console.log(videoId, snippet);
    return(
        <Card>
            <Link to={videoId ? '/video/'+videoId : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:300, height:180}}
                    />
            </Link>
        </Card>
    )
}

export default VideoCard;