import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slidebar = () => {
    return (
        <container>
            <Profile />
        </container>
    )
}

export default Slidebar
