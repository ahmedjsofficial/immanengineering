import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MobileAPPImg from '../Images/MobileAPP.jpg';

const MobileApp = () => {
    return (
        <>
            <Background>
                <Container>
                <Content>
                        <h2>Experience</h2>
                        <h1>24/7 Monitoring</h1>
                        <p>Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.</p>
                        <NavLink to="/contact" className="btn-theme">Order Now</NavLink>
                    </Content>
                </Container>
            </Background>
        </>
    );
};
const Background = styled.section`
    background: url(${MobileAPPImg})center/cover no-repeat;
    min-height: auto;
    position: relative;
    opacity: 1;
    z-index: 2000;
    @media screen and (max-width: 991px){
        background-position: left;
    }
    @media screen and (max-width: 425px){
        background-position: left;
    }
    /* @media screen and (max-width: 550px){
        background-position: left;
    } */
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    min-height: 55vh;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 991px){
        width: 95%;
        justify-content: flex-end;
    }
`;
const Content = styled.div`
    color: #fff;
    width: 35rem;
    padding: 2rem 3rem;
    margin-top: 15vh;
    opacity: 1;
    z-index: 3000;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1rem);
    box-shadow: rgb(0 0 0 / 10%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
    border-radius: 1rem;
    border-bottom: 0.15rem solid rgb(247, 71, 17);

    @media screen and (max-width: 991px){
        width: 25rem;
        padding: 2rem;
        position: absolute;
        top: 15rem;
        right: 4rem;
    }
    @media screen and (max-width: 550px){
        width: 19rem;
        padding: 1.5rem;
        position: absolute;
        top: 15rem;
        right: 3rem;
    }
    @media screen and (max-width: 425px){
        width: 19rem;
        padding: 1.5rem;
        position: absolute;
        top: 15rem;
        left: 2rem;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(0.3rem);
    }
    @media screen and (max-width: 391px){
        width: 16rem;
        padding: 1rem;
        position: absolute;
        top: 13rem;
        left: 0.7rem;
        right: 0.7rem;
    }

    h2{
        font-weight: 500;
        @media screen  and (min-width: 550px) and (max-width: 1200px){
            font-size: 1.3rem;
        }
        @media screen  and (min-width: 280px) and (max-width: 550px){
            font-size: 0.9rem;
        }
    }
    h1{
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        @media screen  and (min-width: 550px) and (max-width: 1200px){
            font-size: 1.3rem;
        }
        @media screen  and (min-width: 280px) and (max-width: 550px){
            font-size: 0.9rem;
        }
    }
    p{
        font-weight: 400;
        margin: 2vh 0 3vh 0;
        @media screen  and (min-width: 280px) and (max-width: 767px){
            font-size: 0.8rem;
        }
        @media screen  and (min-width: 280px) and (max-width: 550px){
            font-size: 0.75rem;
        }
    }

`;
export default MobileApp;
