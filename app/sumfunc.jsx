import React,{useState} from "react";
import { Button } from "react-native";
export const Fatname =()=>{
    return (
        <div>
            B
        </div>
    );
}
export const Motname =()=>{
    return (
        <div>
            A
        </div>
    );
}
export const Age =({age,year})=>{
    return (
        <div>
           <u> อายุ :{age}</u><br/>
           <u> xu :{year}</u><br/>
        </div>
    );
}
export const TestCount =()=>{
    const [count,setCount]=useState(0);
    const Inc=()=>setCount(count+1);
    const Dec=()=>setCount(count-1);
    
    return (
        <div>
            Count:{count}<br/>
            <Button title="เพิ่ม" onPress={Inc}/>
            <Button title="ลบ" onPress={Dec}/>
        </div>
    );
}