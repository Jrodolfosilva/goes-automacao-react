import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 8vh;
padding: 0 140px;
font-size: 12px;
flex-wrap: wrap;
gap:10px;
nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:24px;
    
    
    li{
        font-weight: 600;
        cursor: pointer;
        &:hover{
            color:green;
        }
        :nth-child(7){
            color:black;
        }
        :nth-child(8){
            color:black;
        }
        :last-child{
            display: block;
            background-color: green;
            padding: 8px 4px;
            border-radius: 4px;
            &:hover{
                color:#fff;
            }
        }
    }
} 

`