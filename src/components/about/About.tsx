import React from "react";
import {ContainerAbout,ContainerSection,ContainerAutorizada} from "../about/styled";
import Img1 from "../../assets/timthumb (1).png"
import Img2 from "../../assets/timthumb.png"

const About = ()=>{
    return(
        <ContainerAbout>
               <h2>QUEM SOMOS</h2>
               <ContainerSection>
               <div>
                <p>A Goes Automação é uma empresa focada no desenvolvimento de soluções de tecnologia de controle e frequência de pessoas, tendo como diferencial a facilidade de uso de seus produtos.</p>
                <span>
                Formada por especialistas de larga vivência nas áreas de controle de acesso, direitos trabalhistas e soluções web, sua equipe conta com profissionais especializados e reconhecidos pelos seus clientes e fornecedores.
                </span>
               </div>
               <div>
                <span>
                Desde a especificação de um projeto até os ajustes finais, a Goes Automação possui expertise técnica e prática em todas as etapas necessárias para o desenvolvimento de projetos para a sua empresa.<br/><br/>
                Em seu portfólio, após mais de seis anos de experiência no segmento de relógios ponto e controle de acessos, contabiliza-se mais de 1000 casos de sucesso na utilização de nossos produtos e serviços, o que nos credencia como uma das maiores autoridades em relógio ponto no Sul do Brasil e nos permite atuar em todas as empresas de pequeno, médio e grande porte a partir de nossas tecnologias.<br/><br/>
                Além de todo o conhecimento específico, nossos serviços de soluções de gestão de pessoas alinham os objetivos da sua organização com a facilidade de uso em ambiente web. Isso resulta em uma combinação sob medida para sua corporação e você receberá a capacitação técnica necessária para gerenciar de maneira autônoma o controle e frequência dos seus colaboradores
                </span>
               </div>
               </ContainerSection>
               <ContainerAutorizada>
               <h2>REVENDA E ASSISTÊNCIA TÉCNICA AUTORIZADA</h2>
               <div>
                <img src={Img1} alt="IMAGEM" />
                <img src={Img2} alt="IMAGEM" />
                </div>
               </ContainerAutorizada>
        </ContainerAbout>
    )
}

export default About