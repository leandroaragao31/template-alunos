import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const Title = styled.h1`
    
    text-align:center;
    color: #FFFFFF;
    
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
    `

export const Paragraph = styled.p`
    color:#fff;
    width:60%;
    text-align:justufy;
    font-size:3vh;
    &:hover{
        color:#DAA520;

    }
`

export const Division = styled.div`
    
&:before{
    content:"";
    width:98vw;
    height:0.6vh;
    background-color:#B8860B;
    position:relative;
    display:block;
    
   
}
  

`