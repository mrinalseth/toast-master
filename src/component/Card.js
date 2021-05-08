import React, { useState } from 'react'


const Card = (props) => {
    const [data, setdata] = useState('')
    const [tag, setTag] = useState('')

    const handleClick = () => {
        data==='' ? setdata(props.answer) : setdata('')
        setTag('Assigned')
    }

    const index = {
        fontSize: "15px",
        width: "40px",
        height: "40px",
        color: "#4992d3",
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "7px",
    }
    const text = {
        color: 'black',
        textAlign: 'center'
    }
    const card = {
        backgroundColor: '#8ddcf2',
        height: '250px',
        width: '350px',
        padding: 10,
        margin: 20
    }
    const tagStyle = {
        position: 'absolute',
        marginTop: '-90px',
        marginLeft: '250px',
        fontSize: 24,
        color: 'red'
    }
    
    return(
        <div style={card} onClick={() => handleClick()}>
            <div>
                <p style={index}>{props.index}</p>
            </div>
            <h1 style={tagStyle}>{tag}</h1>
            <h2 style={text}>{data}</h2>
        </div>
    )
}

export default Card