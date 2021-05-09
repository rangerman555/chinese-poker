import React, { useEffect } from 'react';
import styled from 'styled-components';
import HandList from './components/HandList';
import Header from './components/Header';
import Board from './components/Board';
import InfoContainer from './components/InfoContainer';
import { BOARD_SEPARATOR_wIDTH } from './constants';
import Counter from './components/Counter';
import { initDeck } from './helpers/gameLogic';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {initCards} from './redux/deckSlice';

const Container = styled.div`
  padding: 0 15px;
`;

const HandsContainer = styled.div`
  
`;


const BodyContainer = styled.div`
  display: flex;
  
`;

const App: React.FC = function() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const deck = initDeck();
    dispatch(initCards(deck))
  }, [])
  
  return <Container>
            <Header />
            <BodyContainer>
              <Board />
              <InfoContainer />
            </BodyContainer>
          </Container>
}

export default App;
