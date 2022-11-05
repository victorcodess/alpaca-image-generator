import React from "react";
import earings from "../alpaca/accessories/earings.png"
// import flower from "../alpaca/accessories/flower.png"
// import glasses from "../alpaca/accessories/glasses.png"
// import headphone from "../alpaca/accessories/headphone.png"
import blue50 from "../alpaca/backgrounds/blue50.png"
import defaultEar from "../alpaca/ears/default.png"
import angry from "../alpaca/eyes/angry.png"
import bang from "../alpaca/hair/bang.png"
import bubbleTea from "../alpaca/leg/bubble-tea.png"
import astonished from "../alpaca/mouth/astonished.png"
import bendBackward from "../alpaca/neck/bend-backward.png"
import nose from "../alpaca/nose/nose.png"






const Preview = () => {

    return (
        <div className="alpaca">
            <img src={earings} alt="" className="alpaca-accessories" />
            <img src={blue50} alt="" className="alpaca-backgrounds" />
            <img src={defaultEar} alt="" className="alpaca-ears" />
            <img src={angry} alt="" className="alpaca-eyes" />
            <img src={bang} alt="" className="alpaca-hair" />
            <img src={bubbleTea} alt="" className="alpaca-leg" />
            <img src={astonished} alt="" className="alpaca-mouth" />
            <img src={bendBackward} alt="" className="alpaca-neck" />
            <img src={nose} alt="" className="alpaca-nose" />

        </div>
    )
}

export default Preview