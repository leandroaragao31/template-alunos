import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    image,
    bottomtitle,
    bottomparagraph
}) {
    return (
        <>
        <S.Container>
            <S.Wrapper>
                <S.Title>{title}</S.Title>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <S.BtnStart>{btnstart}</S.BtnStart>
            </S.Wrapper>
            <img style={{ width: "350px" }} src={image} alt="figure header" />
        </S.Container>
            <S.BottomWrapper>
                <S.BottomTitle>{bottomtitle}</S.BottomTitle>
                <S.BottomParagraph>{bottomparagraph}</S.BottomParagraph>
            </S.BottomWrapper>
        </>
    )
}
