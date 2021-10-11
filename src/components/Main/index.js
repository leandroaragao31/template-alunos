import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    image,
    bottomtitle,
    bottomparagraph,
    imagemain,
    imgmain
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

            <S.BoxGif>
                <figure>
                    <S.ImageMain src={imagemain} alt="" />
                </figure>
                <div>
                    <S.TitleGif>Realtime and Collaborative</S.TitleGif>
                    <S.ParagraphGif>Working remotely just got a lot easier. Our collaborative spaces provide greater integration and visualization of ideas in real time.</S.ParagraphGif>
                </div>
            </S.BoxGif>

            <S.BoxImgMain>
                <figure>
                    <S.ImageMain src={imgmain} alt="" />
                </figure>
                <div>
                    <S.TitleImgMain>Uncomplicated, intuitive, friendly</S.TitleImgMain>
                    <S.ParagraphImgMain>Ideal for who is looking to increase productivity and potentialize<br /> collaboration.
                        <br />Everything free, like thinking.</S.ParagraphImgMain>
                </div>
            </S.BoxImgMain>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>For you, for your team and your organization</S.TitleMain>
                    <S.ParagraphMain>Strytegy is a valuable tool to make you and your team more efficient in project management and new business development.</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
        </>
    )
}
