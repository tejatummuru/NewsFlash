import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./Swipe.css";
import { IconButton } from '@mui/material';
function Swipe() {
    return (
        <div className="swipe">
            <IconButton className="thumbsUp">
                <ThumbUpIcon fontSize="large" />
            </IconButton>
            <IconButton className="thumbsDown">
                <ThumbDownAltIcon fontSize="large"/>
            </IconButton>
            <IconButton className="expand">
                <ReadMoreIcon fontSize="large"/>
            </IconButton>
            <IconButton className="save">
                <BookmarkIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default Swipe
