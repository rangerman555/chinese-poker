import React, {useEffect, useState} from 'react';
import Card from './Card';
import styled from 'styled-components';
import {CARD_MARGIN} from '../constants';
import { CardType } from '../redux/gameSlice';

interface ReverseType {
    reverse: boolean;
}

const Container = styled.div<ReverseType>`
    display: flex;
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
`;

const CardContainer = styled.div<ReverseType>`
    margin-top: ${props => props.reverse ? 0 : CARD_MARGIN};
    margin-bottom: ${props => props.reverse ? CARD_MARGIN : 0};
`;

interface HandColumnsProps {
    reverse: boolean;
    cards: CardType[];
    
}

const HandColumns: React.FC<HandColumnsProps> = props => {
    
    if (!props.cards) return null;
    
    return (
        <Container reverse={props.reverse}>
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