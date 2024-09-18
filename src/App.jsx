import React from 'react'
import './App.css';
import { LuLoader } from 'react-icons/lu';
const App = () => {
  return (
    <div style={{
      width : "100vw",
      height : "100vh",
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      justifyContent: "center",
      gap: "2rem",
      backgroundColor: "black",
      color : "white"
    }}>
      <img
        src="./logo.jpeg"
        alt="logo"
        width={"200px"}
        height={"150px"}
        style={{
          maxWidth: "250px",
          maxHeight : "200px"
        }}
      />
      <p ={{fontSize : "2.5rem", fontWeight : 600, textAlign : "center"}}>Website is Under maintenance.</p>
      <LuLoader
        className='animte-spin'
        style={{
          fontSize: "5rem",
          color : "#478CCF"
        }}
      />
    </div>
  )
}

export default App