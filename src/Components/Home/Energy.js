import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import energy from "../Images/energy.jpg";
import { Fade } from "react-awesome-reveal";

const Energy = () => {
    return (
        <>
            <Section>
                <Container>
                    <TextContent>
                    <Fade direction="down"><h2>Why Choose US</h2>
                        <h1 className="disney-titles">Save the Planet</h1>
                        <h1 className="disney-titles">By Using Renewable Energy</h1>
                        <p>Imaan Engeering is among the world’s leading renewable energy solutions provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas, Veztaz is powering a greener tomorrow.</p>
                        <p>You save money by paying for power at a rate that’s lower than what your utility can provide.Plus, it’s expensive. We offer a cleaner and safer alternative so that we can all feel good about energy again. We’re able to offset expensive electricity prices because our solar panels produce energy much more efficiently than traditional utilities.</p>
                        <NavLink to="/products" className="btn-theme button">Read More</NavLink></Fade>
                    </TextContent>
                    <ImgContent>
                    <Fade direction="up"><img src={energy} alt="about/img" /></Fade>
                    </ImgContent>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    position: relative;
    padding: 50px 7%;
    margin-bottom: 0;
    background: 0 0;
    color: #000;

    @media screen and (max-width: 991px){
        padding: 35px 50px;
    }
    @media screen and (max-width: 767px){
        padding: 25px;
    }    
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    @media screen and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
        padding: 2rem 0 2rem 0;
    }
`;
const TextContent = styled.div`
    width: 49%;
    flex: 0 1 auto;
    z-index: 3;
    @media screen and (max-width:991px){
        width: 100%;
        padding: 0;
        text-align: center;
    }
    h2{
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 1vh;
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 1rem;
        }
    }
    p{
        color: #000 !important;
        font-size: 1rem;
        margin: 3vh 0;
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.85rem;
            margin: 1vh 0 3vh 0;
            text-align: start !important;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.65rem;
            margin: 1vh 0 3vh 0;
            text-align: start !important;
        }
    }  
`;
const ImgContent = styled.div`
    width: 45%;
    flex: 0 1 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;
    display: flex;
    justify-items: center;
    justify-content: center;

    @media screen and (max-width: 991px){
        width: 100%;
        margin-top: 2rem;
        max-width: 600px;
    }

    img{
        width: 100%;
        height: auto;
        max-width: 650px;
        z-index: 1500;
        border-radius: 1rem;
        
        @media screen and (min-width: 500px) and (max-width: 1200px){
            height: 45vh;
            width: 100%;
            object-fit: cover;
        }
        @media screen and (min-width: 280px) and (max-width: 500px){
            height: auto;
            width: 100%;
            object-fit: cover;
            border-radius: 1rem;
        }
    }
`;
export default Energy;
