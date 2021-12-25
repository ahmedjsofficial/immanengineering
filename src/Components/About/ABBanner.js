import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import aboutbg from '../Images/aboutbg.jpg';


const ABBanner = () => {
    return (
        <>
            <Background>
                <Container>
                    <Wrap>
                        <h1>About our company</h1>
                        <p>Imaan Engineering able to offset expensive electricity prices because our solar panels produce energy much more efficiently than traditional utilities. You save money by paying for power at a rate that’s lower than what your utility can provide.Plus, it’s expensive. We offer a cleaner and safer alternative so that we can all feel good about energy again.</p>
                        <NavLink to="/projects" className="btn-theme">Our Projects</NavLink>
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
    width: 35rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(0.3rem);
    box-shadow: 0.1rem 0.1rem 1rem rgba(0 0 0 / 3%);
    padding: 2rem;
    margin-top: 13vh;
    border-radius: 0.345rem 1rem 1rem 0.345rem;
    border-left: 1rem solid rgb(247, 71, 17);

    @media screen and (min-width: 550px) and (max-width: 991px){
        width: auto;
        margin-top: 15rem;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        width: auto;
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
    p{
        color: rgba(255,255,255,0.85);
        margin: 1vh 0 2vh 0;
        font-weight: 400;

        @media screen and (min-width: 550px) and (max-width: 991px){
            font-size: 0.85rem;
            font-weight: 300;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 0.75rem;
        }
    }
`;
export default ABBanner;
