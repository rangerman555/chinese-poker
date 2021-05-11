import React from 'react';
import styled from 'styled-components';
import HandList from './HandList';
import { BOARD_SEPARATOR_wIDTH } from '../constants';

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
    return (
        <Container>
            <HandList reverse={true} playerId={'1'}/>
                <Separator />
            <HandList reverse={false} playerId={'0'}/>
        </Container>
    );
}

export default Board;