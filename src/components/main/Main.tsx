import React from "react";
import {ContainerMain} from "./styled"
import Slide1 from "../../assets/slide1.jpg"
import Slide2 from "../../assets/slide2.jpg"
import Slide3 from "../../assets/slide3.jpg"
const Main = ()=>{
const arryimg = [Slide1,Slide2,Slide3]

    return (
       <ContainerMain>
       
        <img src={Slide2} alt="" />
        <button>Fale com um especialista agora</button>
        
       </ContainerMain>
    )
}

export default Main