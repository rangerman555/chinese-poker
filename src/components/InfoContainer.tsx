import React from 'react';
import styled from 'styled-components';
import Deck from './Deck';


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
    return (
        <Container>
            <DeckContainer>
                <Deck />
            </DeckContainer>
        </Container>
    );
}

export default InfoContainer;