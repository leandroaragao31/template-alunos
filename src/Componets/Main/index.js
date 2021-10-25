import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styled'


export function Main() {


    const data = useStaticQuery(graphql`
    query{
        alldata{
            mains {
                titleMain
              }
        }
    }
 `)
    const { titleMain} = data.alldata.mains[0]

    return (
        <S.Container>

            <S.Title>{titleMain}</S.Title>
            <S.Paragraph>“Tic Tac” bate o relógio,
                A folha que cai da árvore graciosamente se desmancha e se torna chão,
                A chuva corre, o dia vira noite e a noite vira dia.
                Essa é a passagem de momentos da contagem regressiva para um acontecimento
                iminente que nos persegue.
                O existir passará a não existir.
                É nesse momento que sentimos angústia.
                Entender o que está por de trás desse “véu”,
                É como um cão sedento por um osso.
                Em busca de um sentido para o desvelamento.
                Em dado momento  essa importância devida nos atinge.
                E é inevitável tal sentimento.
            </S.Paragraph>
            <S.Paragraph> Não se engane,
                O desfalecimento do existir pode vir acontecer no pleno existir.
                Entregar-se a uma decisão que perpetua seu destino,
                Assim como Abraão,
                ao decidir matar seu primogênito,
                já o torna assim refém de um segmento.
                Um dito “assassino” na ocasião.
            </S.Paragraph>
            <S.Paragraph>
                O esquecimento do ser a certas aclamações da natureza,
                é o que torna possível uma mínima vontade de continuar a existir.
                A busca por criar lugares e experiências marcantes,
                Suficientes para criar um motivo de adiamento da finitude.
            </S.Paragraph>
            <S.Paragraph> Como viver em um lugar, um mundo em que você não é bem vindo?
                As amarras da moralidade humana,
                A diferenciação do outro que não me serve deve ser descartada?
                devo desistir por que o outro não aceita um corpo que o incomoda?
                Ah! O cômodo conforto metafísico do mundo social perverso e cruel, excludente e mortal!!!
            </S.Paragraph>
            <S.Paragraph>O afastamento do ser das realidades que o constituem enquanto aquele ser,
                torna-o como Abraão,
                Um morto-vivo!
                fadado ao imovel e rustico esfriamento sentir-se vivo.
                Sim, vivemos em um mundo de mortos-vivos.
            </S.Paragraph>
            <S.Paragraph> Seja um passarinho cantando sobre um ramo de oliveira.
                Um alegre sopro de uma abertura de ser quem te perpassa.
                Seja um grito de uma época de libertação como Rupaul Charles,
                nos trazendo  ao “cuidado de si”.
                “If you can’t love yourself, how in the hell can you love somebody else?”,
                “You better Work” diria RuPaul,
                Ao ver o velho destino de Abraão,
                A caminho de se tornar Abraão.
            </S.Paragraph>
            <S.Division></S.Division>
        </S.Container>
    );
}
