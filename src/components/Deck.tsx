import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface DeckProps {

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const Deck: React.FC<DeckProps> = props => {
    return (
        <Container>
            <Card name={'1B'}/>
        </Container>
    );
}

export default Deck;