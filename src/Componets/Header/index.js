import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'



export function Header() {


    const data = useStaticQuery(graphql`
    query{
        alldata{
            headers {
                title
                logo {
                  url
                }
              }
        }
    }
 `)
        const { logo, title} = data.alldata.headers[0]    

    return (
        <S.Container>
        <figure>
         <S.Logo src="https://logodownload.org/wp-content/uploads/2015/02/ufrj-logo-8.png" alt="minerva" />
        </figure>
        <div>
           <S.Title>{title}</S.Title>
        </div>
        </S.Container>
    );
}
