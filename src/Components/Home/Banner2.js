import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import adbanner1 from '../Images/adbanner4.jpg';
import { Fade } from "react-awesome-reveal";

const Banner2 = () => {
    return (
        <>
            <Banner1>
                <Container>
                    <Fade direction="up"><TextContent>
                        <h1>IE Solar Solution for</h1>
                        <h1>All Markets Across The Globe</h1>
                        <p>Solar power has been adopted globally for multiple reasons, including grid independence, adoption of clean energy, net-metering, and lower electricity bills. For countries in the developing world with un-stable grids, such as Pakistan, India, Bangladesh, Nigeria & various countries in Africa, the main purpose of Solar Solutions is to provide continuous electricity amidst frequent power outages. Imaan Engineerings solves the problem of load-shedding along with the benefits of solar solutions that homes and businesses enjoy in the West.</p>
                        <NavLink to="/contact" className="btn-theme button">Contact US</NavLink>
                    </TextContent></Fade>
                </Container>
            </Banner1>
        </>
    );
};
const Banner1 = styled.section`
    background: url(${adbanner1})center/cover no-repeat;
    min-height: auto;
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    min-height: 65vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 550px){
        min-height: 71vh;
    }
`;
const TextContent = styled.div`
    width: 45rem;
    padding: 3rem;
    opacity: 1;
    z-index: 2000;
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(2rem);
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
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.08;
        color: #000;

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
            font-size: 0.7rem;
        }
    }
`;
export default Banner2;
