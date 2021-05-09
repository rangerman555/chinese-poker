import React, {useEffect, useState} from 'react';
import Card from './Card';
import styled from 'styled-components';
import {CARD_MARGIN} from '../constants';

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
}

const HandColumns: React.FC<HandColumnsProps> = props => {
    
    const cardsNames = ['2D', '5H', '3D', '8S', '6C'];
    
    return (
        <Container reverse={props.reverse}>
            {cardsNames.map((name, index) => {
                if (index === 0) {
                    return <Card key={name} name={name} />
                }
                return <CardContainer reverse={props.reverse}>
                            <Card key={name} name={name} />
                        </CardContainer>
            }
        )}
        </Container>
    );
}

export default HandColumns;