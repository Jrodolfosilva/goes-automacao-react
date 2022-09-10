import styled from "styled-components";


export const ContainerAbout = styled.div`
color: #111111;
padding: 50px 220px;

h2{
    font-size: 50px;
    margin-bottom: 12px;
}



`
export const ContainerSection = styled.section`

    display: flex;
    flex-wrap: wrap;
    /* gap:50px; */
    
    div{
        min-width: 400px;
        width: 50%;
        padding: 0 12px;
        p{
            font-size: 26px;
            font-weight: 700;
            color:#93bf39;
        }
       
    }
    div:first-child {
        border-right: 1px solid #93bf39;

        span{
        display: block;
        margin-top: 16px;
        font-size: 20px;
        }
    }
    div:last-child span{
        font-size: 14px;
    }

`
export const ContainerAutorizada = styled.section`
text-align: center;
h2{
    font-size: 26px;
    margin-top: 60px;
}
div {
padding: 0 135px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
}


`