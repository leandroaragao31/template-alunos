import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'



export function Footer() {


    const data = useStaticQuery(graphql`
    query{
        alldata{
            footers {
                titleFooter
                name
                dre
              }
        }
    }
 `)
        const { titleFooter, name, dre} = data.alldata.footers[0]    

    return (
        <S.Container>
            <S.Title>{titleFooter}</S.Title>
            <S.Paragraph>Nome: {name}</S.Paragraph>
            <S.Paragraph>Dre:{dre}</S.Paragraph>
        </S.Container>
    );
}
