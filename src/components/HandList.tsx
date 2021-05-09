import React, {useEffect, useState} from 'react';
import HandColumn from './HandColumn';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const HandContainer = styled.div<{index: number}>`
    margin-left: ${props => props.index === 0 ? 0 : '20px'};
`;

interface HandListProps {
    reverse: boolean;
}

const HandList: React.FC<HandListProps> = props => {
    
    return (
        <Container>
            {[0, 1, 2, 3, 4].map(key => {
                return <HandContainer index={key}>
                    <HandColumn key={key} reverse={props.reverse} />        
                </HandContainer>
                }
            )}
        </Container>
    );
}

export default HandList;