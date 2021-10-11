import styled from 'styled-components'

export  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 3rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
`

export const Title = styled.h1`
    width: 360px;
    color: rgb(34, 37, 75);
`

export const Paragraph = styled.p`
    width: 380px;
    color: rgb(34, 37, 75);
    opacity: 0.9;
`

export const BtnStart = styled.button`
    background: gold;
    width: 150px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
`

export const BottomTitle = styled.h2`
    color: rgb(34, 37, 75);
`

export const BottomParagraph = styled.p`
    width: 465px;
    color: rgb(34, 37, 75);
    opacity: 0.9;
    text-align: center;
`

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`