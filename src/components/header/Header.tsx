import React, { useState } from "react";
import {ContainerHeader,ToogleMobile} from "./styled";
import Logo from "../../assets/logo-registro2.png";
import whats from "../../assets/icons8-whatsapp-50.png"
import open from "../../assets/open.png";
import cloose from "../../assets/cloose.png"



const Header = ()=>{

    const [active,setActive] = useState(false)
    return (
        <ContainerHeader ativo={active}>
            <img src={Logo} alt={"LOgo"}/>
            <nav>
                <ul>
                    <li>EMPRESA</li>
                    <li>SERVIÇOS</li>
                    <li>FUNCIONALIDADES</li>
                    <li>DIFERENCIAS</li>
                    <li>CLIENTES</li>
                    <li>CONTATO</li>
                    <li>(45) 3303-4319</li>
                    <li>(45) 9 9832-0882 <img src={whats}/></li>
                    <li>ACESSO AO SISTEMA</li>
                </ul>
            </nav>
            <ToogleMobile onClick={()=>setActive(!active)}>
            <img src={active?cloose:open} alt=""/>    
                
            </ToogleMobile>
        </ContainerHeader>
    )
}

export default Header