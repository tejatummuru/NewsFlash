import React from 'react'
import "./Header.css";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link, useNavigate } from "react-router-dom";
function Header({back}) {
    const navigate = useNavigate();
    return (
        <div className = "header">
            {back ?(
                <IconButton  onClick={() => navigate(back)}>
                    <ArrowLeftIcon fontSize="large" className="back"/>
                </IconButton>
            ) :(
                <IconButton>
                    <AssignmentIndIcon className="header_icon" fontSize="large"/>
                </IconButton>
            )}
            
            <Link to="/">
                <img 
                className = "header_logo"
                src="https://previews.123rf.com/images/julos/julos1607/julos160722846/
                80593222-cartoon-frog-with-sunglasses.jpg" alt="logo"/>
            </Link>
            
            <Link to="/chats">
                <IconButton>
                    <NewspaperIcon className="header_icon"/>
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
