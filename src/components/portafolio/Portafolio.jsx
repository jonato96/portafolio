import { useState } from "react";
import PortafolioList from "../portafolioList/PortafolioList";
import "./portafolio.scss"
import {
    mobilePortafolio,
    webPortafolio,    
} from "../../data";
import { useEffect } from "react";

export default function Portafolio(){
    const [selected, setSelected] = useState("destacado");
    const [data, setData] = useState([]);
    const list =[
        {
            id: "destacado",
            title: "Destacado",
        },
        {
            id: "web",
            title: "Web",
        },
        {
            id: "mobile",
            title: "Mobile App",
        }
    ];
    useEffect(()=>{

        switch(selected){
            case "destacado":
                setData(mobilePortafolio)
                break;
            case "web":
                setData(webPortafolio)
                break;
            case "mobile":
                setData(mobilePortafolio)
                break;
            default:
                setData(mobilePortafolio);
        }
        
    },[selected])

    return(
        <div className="portafolio" id="portafolio">
            <h1>
                Portafolio
            </h1>
            <ul>
                {list.map((item)=>(
                    <PortafolioList 
                    title={item.title}
                    active = {selected == item.id}
                    setSelected={setSelected}
                    id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}                                         
            </div>
        </div>
    )
}