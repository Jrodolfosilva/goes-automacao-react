import styled from "styled-components";

export const ContainerHeader = styled.header`
position: fixed;
z-index: 99;
top: 2%;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
padding: 10px 80px;
font-size: 11px;
flex-wrap: wrap;


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
@media (max-width:768px) {
    top:0;
    padding: 20px 30px;
    height: auto;
    align-items: flex-start;
    img{
        width: 80px;
    }
    nav{
        ${({ativo}:any)=>!ativo&&`
        display:none;
        `}
        
        ul{
            display:none;
            display: flex;
            position: absolute;
            flex-direction: column;
            background-color: #111111;
            width: 40vw;
            top:0;
            right: 0;
            padding: 45px 0;
        }
    }    

}
`

export const ToogleMobile = styled.div`
display: none;
img{
    width: 32px;
    position: absolute;
    top: 6%;
    right: 2%;

}
@media (max-width:768px) {
 display:block ;
 z-index: 99;
}

`