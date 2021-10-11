import styled from 'styled-components'

export const ContainerHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #fff;
    opacity: 0.9;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ImageLogo = styled.img`
    width: 100px;
`

export const BtnsInfo = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: .5rem;
    &:nth-child(3) {
        background: rgb(255, 235, 151);
        width: 100px;
      }
    &:nth-child(4) {
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 10px;
        width: 28px;
        height: 28px;
      }
`