import React from 'react'
import Clock from './Clock'

const BgColor = () => {
    const [bgColor, setBgColor] = React.useState("yellow");
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <select name="" id="" onChange={(e) => setBgColor(e.target.value)} value={bgColor} style={{ padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
                <option value="purple">purple</option>
                <option value="orange">orange</option>
                <option value="pink">pink</option>
                <option value="brown">brown</option>
                <option value="gray">gray</option>
            </select>
            <Clock color={bgColor} />
        </div>
    )
}

export default BgColor