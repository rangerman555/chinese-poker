import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #f2f2f2;
    padding: 5px;
    margin-bottom: 10px;
`;

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = props => {
    return (
        <Container>
            <h2>Chinese Poker</h2>
        </Container>
    );
}

export default Header;