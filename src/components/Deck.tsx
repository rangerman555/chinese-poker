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
            <Card card={{name: '1B', suit: '', value: 0, open: true}}/>
        </Container>
    );
}

export default Deck;