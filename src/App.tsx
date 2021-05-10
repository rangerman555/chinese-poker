import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Board from './components/Board';
import InfoContainer from './components/InfoContainer';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { initDeck, initGame } from './redux/gameSlice';
import { getDeck, initGame as initGameLogic } from './helpers/gameLogic';

const Container = styled.div`
  padding: 0 15px;
`;


const BodyContainer = styled.div`
  display: flex;
  
`;

const App: React.FC = function() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(initDeck(getDeck()))
    const gameData = initGameLogic();
    dispatch(initGame(gameData))
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
