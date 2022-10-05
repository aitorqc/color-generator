import React from 'react'
import rgbToHex from './utils';

export default function SingleColor({rgb, weight, index}) {
    const bcg = rgb.join(",");
    const hex = rgbToHex(...rgb);

    return (
        <div class="col" style={{backgroundColor:`rgb(${bcg})`}}>
           <p className="percent-value">{weight}%</p>
           <p className="color-valur">{hex}</p>
        </div>
    )
}
