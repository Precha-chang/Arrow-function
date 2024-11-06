import React from "react";
import UserInfo from "./userinfo";
import {Fatname,Motname,Age,TestCount} from "./sumfunc"

const App = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f0f8ff",
            color: "#333",
            textAlign: "center"
        }}>
            <h1>สวัสดีชาว USA!</h1>
            <h2>ชื่อ: JK_chaNG</h2>
            <h3>สาขา:CoM</h3>
            <h1><UserInfo/></h1>
            <u><Fatname/></u>
            <Motname/>
            <Age age='35' year='2500'/>
            <TestCount/>
            
            
        </div>
    );
}

export default App;
