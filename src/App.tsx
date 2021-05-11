import React, { useEffect } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import InfoContainer from './components/InfoContainer';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { initGame } from './redux/gameSlice';
import { initGame as initGameLogic } from './helpers/gameLogic';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 15px;
`;

const App: React.FC = function() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(initDeck(getDeck()))
    const gameData = initGameLogic();
    dispatch(initGame(gameData))
  }, [])
  
  return <Container>
            <Board />
            <InfoContainer />
          </Container>
}

export default App;
