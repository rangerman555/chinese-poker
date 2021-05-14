import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HandList from './HandList';
import { BOARD_SEPARATOR_wIDTH } from '../constants';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { startGame } from '../redux/gameSlice';

interface Props {
    
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;;
    height: 100%;
`;

const Separator = styled.div`
  width: ${BOARD_SEPARATOR_wIDTH};
  height: 10px;
  background-color: #f2f2f2;
  margin: 5px 0;
  border-radius: 10px;
`;

const Board: React.FC<Props> = props => {
    const isGameActive = useAppSelector(state => state.game.isActive);
    const dispatch = useAppDispatch();

    const renderStartGameButton = () => {
        return (
            <button onClick={() => dispatch(startGame())}>Start Game</button>
        );
    }

    const renderCards = () => {
        return (
            <React.Fragment>
                <HandList reverse={true} playerId={'1'}/>
                    <Separator />
                <HandList reverse={false} playerId={'0'}/>
            </React.Fragment>
        );
    }
    return (
        <Container>
            {isGameActive ? 
                renderCards():
                renderStartGameButton()
            }
        </Container>
    );
}

export default Board;