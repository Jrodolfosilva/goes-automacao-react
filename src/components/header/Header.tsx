import React from "react";
import {ContainerHeader} from "./styled";

const Header = ()=>{

    return (
        <ContainerHeader>
            <img src={""} alt={"LOgo"}/>
            <nav>
                <ul>
                    <li>EMPRESA</li>
                    <li>SERVIÇOS</li>
                    <li>FUNCIONALIDADES</li>
                    <li>DIFERENCIAS</li>
                    <li>CLIENTES</li>
                    <li>CONTATO</li>
                    <li>(45) 3303-4319</li>
                    <li>(45) 9 9832-0882 W</li>
                    <li>ACESSO AO SISTEMA</li>
                </ul>
            </nav>
        </ContainerHeader>
    )
}

export default Header