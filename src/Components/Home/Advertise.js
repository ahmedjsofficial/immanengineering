import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import advertise from '../Images/advertises.jpg';
import { Slide } from "react-awesome-reveal";
const Advertise = () => {
    return (
        <>
            <Section>
                <Container>
                <Slide direction="right">
                    <TextContent>
                        <h1>We have many years</h1>
                        <h1>experience in the solar panel installation</h1>
                        <p>Our team completes continuing education courses to ensure we can provide solutions to the most difficult problems and issues. We work efficiently and effectively to ensure 24/7 support for you. Providing Value To Clients Through Product & Innovation.Power Supplies and Harsh Environments. Improve Business Productivity and Performance with No Power Outages & Lowest per unit Electricity Cost!</p>
                        <Button>
                            <NavLink to="/contact" className="btn-analsis">Get Free  Analysis of Your Savings</NavLink>
                        </Button>
                    </TextContent>
                    </Slide>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${advertise}) center/cover no-repeat;
    min-height: 45vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 375px) and  (max-width: 550px){
        min-height: 55vh;
    }
    @media screen and (min-width: 280px) and  (max-width: 375px){
        min-height: 67vh;
    }
`;
const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    @media screen and (min-width: 767px) and  (max-width: 1200px){
        width: 85%;
    }
    @media screen and (min-width: 280px) and  (max-width: 767px){
        width: 95%;
    }
`;
const TextContent = styled.div`
    padding: 3rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(1rem);
    box-shadow: rgb(29 81 146 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
    border-radius: 1rem;
    border-bottom: 0.15rem solid rgb(247, 71, 17);

    @media screen and (min-width: 280px) and  (max-width: 767px){
        padding: 2rem;
    }

    h1{
        color: rgba(0,0,0,0.9);
        font-size: 1.5rem;
        font-weight: 700;
        opacity: 1;
        text-transform: uppercase;
        text-shadow: 0rem 0rem 0.3rem rgba(0,0,0,0.3);

        @media screen and (min-width: 767px) and  (max-width: 1200px){
            font-size: 1.2rem;
        }
        @media screen and (min-width: 550px) and  (max-width: 767px){
            font-size: 1rem;
        }
        @media screen and (min-width: 280px) and  (max-width: 550px){
            font-size: 0.67rem;
        }
    }
    p{
        font-weight: 400;
        line-height: 1.08;
        letter-spacing: 0.4px;
        margin: 2vh 0;
        color: rgba(0,0,0,0.8);

        @media screen and (min-width: 767px) and  (max-width: 1200px){
            font-size: 0.85rem;
        }
        @media screen and (min-width: 280px) and  (max-width: 767px){
            font-size: 0.65rem;
        }
    }
`;
const Button = styled.div`
    display: block;
    padding: 1rem;
    width: 19rem;
    text-align: center;
    border-radius: 0.5rem;
    background: var(--background-color);
    transition: background 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
    @media screen and (min-width: 767px) and  (max-width: 1200px){
        width: 17rem;
    }
    @media screen and (min-width: 550px) and  (max-width: 767px){
        width: 15rem;        
    }
    @media screen and (min-width: 280px) and  (max-width: 550px){
        width: auto;
        margin: 0 auto;
    }

    &:hover{
        border: 2px solid rgb(247, 71, 17);
        background: transparent;
        
        > .btn-analsis{
            color: rgb(247, 71, 17);
        }

    }

    > .btn-analsis{
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;

        @media screen and (min-width: 767px) and  (max-width: 1200px){
            font-size: 0.85rem !important;
        }
        @media screen and (min-width: 425px) and  (max-width: 767px){
            font-size: 0.75rem !important;
        }
        @media screen and (min-width: 280px) and  (max-width: 425px){
            font-size: 0.7rem !important;
            padding: 0.35rem 0.3rem !important;
        }
    }
`;
export default Advertise;
