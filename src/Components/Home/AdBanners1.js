import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import adbanner1 from '../Images/adbanner2.jpg';
import { Slide } from "react-awesome-reveal";
const AdBanners1 = () => {
    return (
        <>
            <Banner1>
                <Container>
                    <Slide direction="left">
                    <TextContent>
                        <h1>Imaan Engineering Smart Solar</h1>
                        <h1>Systems & Solutions for Your Business</h1>
                        <p>Improve Business Productivity and Performance with No Power Outages & Lowest per unit Electricity Cost!</p>
                        <NavLink to="/projects" className="btn-theme button">Explore More</NavLink>
                    </TextContent>
                    </Slide>
                </Container>
            </Banner1>
        </>
    );
};
const Banner1 = styled.section`
    background: url(${adbanner1})center/cover no-repeat;
    min-height: 51vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 550px){
        min-height: 61vh;
    }
`;
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const TextContent = styled.div`
    width: 45rem;
    padding: 3rem;
    opacity: 1;
    z-index: 2000;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(0.1rem);
    box-shadow: rgb(29 81 146 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
    border-radius: 1rem;
    border-bottom: 0.15rem solid rgb(247, 71, 17);

    @media screen  and (min-width: 767px) and (max-width: 1200px){
        width: auto;
        margin: 0 auto;
    }
    @media screen  and (min-width: 280px) and (max-width: 767px){
        width: auto;
        margin: 0 auto;
        padding: 2rem;
    }
    h1{
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.08;
        color: rgb(247, 71, 17);

        @media screen  and (min-width: 767px) and (max-width: 1200px){
            font-size: 1.5rem;
        }
        @media screen  and (min-width: 550px) and (max-width: 767px){
            font-size: 1.3rem;
        }
        @media screen  and (min-width: 280px) and (max-width: 550px){
            font-size: 0.9rem;
        }
    }
    p{
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        margin: 2vh 0 3vh 0;
        @media screen  and (min-width: 280px) and (max-width: 550px){
            font-size: 0.858rem;
        }
    }
`;
export default AdBanners1;
