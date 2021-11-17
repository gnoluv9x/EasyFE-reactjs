import { Button } from "@mui/material";
import React , { useState } from "react";
import './ColorBox.scss'


ColorBox.propTypes = {};

function ColorBox(props) {
    const [color, setColor] = useState("white");

    return (
        <div className="ColorBox">
            {color}
            <Button onClick={() => setColor("black")} variant="contained">
                Change to black
            </Button>
            <Button onClick={() => setColor("white")} variant="outlined">
                Change to white
            </Button>
        </div>
    );
}

export default ColorBox;
