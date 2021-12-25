import React from 'react';
import styled from 'styled-components';

import aboutbg from '../Images/projectbanner.jpg';


const PBanner = () => {
    return (
        <>
            <Background>
                <Container>
                    <Wrap>
                        <h1>Our Projects</h1>
                    </Wrap>
                </Container>
            </Background> 
        </>
    );
};
const Background = styled.main`
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${aboutbg})center/cover no-repeat;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 550px) and (max-width: 767px){
        min-height: 65vh;
    }
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (min-width: 550px) and (max-width: 991px){
        width: 95%;
    }
`;
const Wrap = styled.div`
    width: 15rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(0.3rem);
    box-shadow: 0.1rem 0.1rem 1rem rgba(0 0 0 / 3%);
    padding: 2rem 1rem;
    margin-top: 13vh;
    border-radius: 0.345rem 1rem 1rem 0.345rem;
    border-left: 0.5rem solid rgb(247, 71, 17);

    @media screen and (min-width: 550px) and (max-width: 991px){
        width: 15rem;
        margin-top: 15rem;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        width: 8rem;
        margin-top: 15rem;
        padding: 1rem;
    }

    h1{
        color: rgba(255,255,255,0.9);
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        @media screen and (min-width: 550px) and (max-width: 991px){
            font-size: 1.7rem;
            font-weight: 500;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 1rem;
            font-weight: 500;
        }
    }
`;
export default PBanner;
