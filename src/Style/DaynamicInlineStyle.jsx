import React from 'react'

const DaynamicInlineStyle = () => {
    const [cardStyle, setCardStyle] = React.useState(
        {
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            padding: "20px",
            border: "2px solid black",
            backgroundColor: "#f0f0f0",
            color: "black",
            width: "200px"
        }
    )
    const [textStyle, setTextStyle] = React.useState("balack");
    const [grid, setGrid] = React.useState(true);

    const updateTheme = (bgcolor, textcolor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgcolor, color: textcolor });
        setTextStyle({ ...textStyle, color: textcolor });

    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "green" }}>Dynamic and Conditional Inline Style</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
             <button
                style={{
                    backgroundColor: "#4CAF50",    // green button
                    color: "white",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "background-color 0.3s ease"
                }}
                onClick={() => updateTheme("gray", "yellow")}>Bg Color and Text color Change</button>
            <button
                style={{
                    backgroundColor: "#4CAF50",    // green button
                    color: "white",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "background-color 0.3s ease"
                }}
                onClick={() => updateTheme("white", "black")}>Defult color
                </button>
                <button
                style={{
                    backgroundColor: "#4CAF50",    // green button
                    color: "white",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "background-color 0.3s ease"
                }}
                onClick={()=>setGrid(!grid)}>Toogle Grid</button>
            </div>
           

            <div style={{ display: grid?"flex":"block", flexWrap: "wrap", width: "100%", backgroundColor: "orange",alignItems:"center",justifyContent:"center" }}>
                
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                        
                    </div>

                </div>
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                    </div>

                </div>
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                    </div>

                </div>
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                    </div>

                </div>
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                    </div>

                </div>
                <div style={cardStyle}>

                    <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                    <div>
                        <h1 style={{ color: { textStyle }, fontSize: "30px" }}>Anwar</h1>
                        <p style={{ color: { textStyle }, fontSize: "20px" }}>Software Developer.</p>
                    </div>

                </div>
            </div>

            {/* <div style={{ display: "flex",width: "100%",backgroundColor:"orange", flexWrap:"wrap"}}>
            <div style={cardStyle}>

                <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                <div>
                    <h1 style={{ color:{textStyle}, fontSize: "30px" }}>Anwar</h1>
                    <p style={{ color:{textStyle}, fontSize: "20px" }}>Software Developer.</p>
                </div>

            </div>
            </div>

              <div>
            <div style={cardStyle}>

                <img style={{ width: "200px" }} src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="" />
                <div>
                    <h1 style={{ color:{textStyle}, fontSize: "30px" }}>Anwar</h1>
                    <p style={{ color:{textStyle}, fontSize: "20px" }}>Software Developer.</p>
                </div>

            </div>
            </div> */}

        </div>
    )
}

export default DaynamicInlineStyle