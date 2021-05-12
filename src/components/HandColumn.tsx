import React, {useEffect, useState} from 'react';
import Card from './Card';
import styled from 'styled-components';
import {CARD_MARGIN} from '../constants';
import { CardType, addCard } from '../redux/gameSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getCardFromDeck } from '../helpers/gameLogic';

interface ReverseType {
    reverse: boolean;
}

const Container = styled.div<ReverseType>`
    display: flex;
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    height: 300px;
`;

const CardContainer = styled.div<ReverseType>`
    margin-top: ${props => props.reverse ? 0 : CARD_MARGIN};
    margin-bottom: ${props => props.reverse ? CARD_MARGIN : 0};
`;

interface HandColumnsProps {
    reverse: boolean;
    cards: CardType[];
    playerId: string;
    handId: number;
}

const HandColumns: React.FC<HandColumnsProps> = props => {
    const dispatch = useAppDispatch();

    if (!props.cards) return null;

    const takeCardHandler = () => {
        dispatch(addCard({
            playerId: props.playerId, 
            handId: props.handId, 
            card: getCardFromDeck()
        }))
    }
    
    return (
        <Container 
            reverse={props.reverse}
            onClick={takeCardHandler}
        >
            {props.cards.map((card, index) => {
                if (index === 0) {
                    return <Card key={card.name} card={card} />
                }
                return <CardContainer key={card.name} reverse={props.reverse}>
                            <Card card={card} />
                        </CardContainer>
            }
        )}
        </Container>
    );
}

export default HandColumns;