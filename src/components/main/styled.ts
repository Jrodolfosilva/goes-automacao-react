import styled from "styled-components";

export const ContainerMain = styled.main`
height: 100vh;
display: flex;
justify-content: center;

    button{
        position: absolute;
        top:60vh;
        height: 40px;
        width: 250px;
        border-radius: 8px;
        border:none;
        background-color:#93bf39;
        color:#e5e5e7;
        font-weight: 700;
        cursor: pointer;
        transition: 0.4s;
        

            &:hover{
                scale: 1.05;
            }
        
    }
    img{  
        width: 100%;
    }

`