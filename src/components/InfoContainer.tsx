import React from 'react';
import styled from 'styled-components';
import Deck from './Deck';
import { useAppSelector } from '../redux/hooks';


interface InfoContainerProps {

}

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const InfoContainer: React.FC<InfoContainerProps> = props => {
    const isGameActive = useAppSelector(state => state.game.isActive);

    if (!isGameActive) return null;
    
    return (
        <Container>
            <DeckContainer>
                <Deck />
            </DeckContainer>
        </Container>
    );
}

export default InfoContainer;