import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Sidebar = () => {
    return (
        <Container>
            <LogWrapper>
                <img src={logo} alt="" />
                <h3>
                    Eeee <span>Codes</span>
                </h3>
            </LogWrapper>
            <Form>
                <h3>Sign up</h3>

            </Form>
        </Container>
    )
}

const Form = styled.form`
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }
`;

const LogWrapper = styled.div`
    img {
        height: 6rem;
    }
    h3 {
        text-align: center;
        color: #ff8d8d;
        font-size: 22px;
    }
    span {
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255,0.8);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2rem;
`;

export default Sidebar
