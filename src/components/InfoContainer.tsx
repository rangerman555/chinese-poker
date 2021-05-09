import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
                <Card name={'1B'}/>
            </DeckContainer>
        </Container>
    );
}

export default InfoContainer;