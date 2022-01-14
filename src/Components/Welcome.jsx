import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";

function Welcome()
{
    return(
    <div className="wht">
        <h1>Welcome to ADG</h1>
        <Link to="/">
            <p className="para-div">Go Back to Keeper App<HomeIcon /></p>
        </Link>
    </div>
    );
}

export default Welcome;