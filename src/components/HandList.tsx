import React, {useEffect, useState} from 'react';
import HandColumn from './HandColumn';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { CardType } from '../redux/gameSlice';

const Container = styled.div`
    display: flex;
`;

const HandContainer = styled.div<{index: number}>`
    margin-left: ${props => props.index === 0 ? 0 : '20px'};
`;

interface HandListProps {
    reverse: boolean;
    playerId: string;
}

const HandList: React.FC<HandListProps> = props => {
    const player = useAppSelector(state => state.game.players[props.playerId]);
    if (!player) return null;
    const hands = player.hands;
    return (
        <Container>
            {hands.map((hand, index) => {
                return <HandContainer key={index} index={index}>
                    <HandColumn 
                        reverse={props.reverse} 
                        cards={hand.cards} 
                        playerId={props.playerId}
                        handId={index}
                    />        
                </HandContainer>
                }
            )}
        </Container>
    );
}

export default HandList;