import styled from "styled-components";

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 8vh;
padding: 20px 80px;
font-size: 11px;
flex-wrap: wrap;
gap:10px;

img{
    width: 150px;
}
nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:24px;
    
    li{
        font-weight: 600;
        cursor: pointer;
        &:hover{
            color:#93bf39;
        }
        :nth-child(8),:last-child{
            width: 140px;
            height: 32px;
            text-align: center;
            line-height: 28px;
            padding: 2px 1px;
            border-radius: 4px;
            border: 1px solid white;
            
        }
        :nth-child(8):hover{
            background-color:#4BBF52;
            color: white;
        }
        :last-child{
            
            background-color: #93bf39;
            border-radius: 4px;
            &:hover{
                background-color: #fff;
                color:#93bf39;
            }
        }
        img{
            width: 10%;
        }
    }
} 

`