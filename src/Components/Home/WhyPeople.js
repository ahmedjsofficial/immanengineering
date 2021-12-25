import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { productcardAPI } from '../API/API';
const WhyPeople = () => {
    return (
        <>
            <Main>
                <Container>
                    <Title>Solar Panels</Title>
                    <CardGrids>
                        {
                            productcardAPI && productcardAPI.map((value,index)=>{
                                return <Cards key={index}>
                                        <div className="card-img"><img src={value.pcardImg} alt="card/img" /></div>
                                        <div className="card-body">
                                            <h1>{value.title}</h1>
                                            <p>{value.text}</p>
                                        </div>
                                        <div className="card-footer">
                                            <NavLink to="/products" className="btn-theme button">Read More</NavLink>
                                        </div>
                                    </Cards>
                            })
                        }
                    </CardGrids>
                </Container>
            </Main>
        </>
    );
};
const Main = styled.section`
    padding: 3rem 0 5rem 0;
    @media screen and (max-width: 767px){
        padding: 3rem 0;
    }
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (max-width: 767px){
        width: 95%;
    }
`;
const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    background: var(--background-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-sizing: content-box;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(242, 165, 93, 0.3);
    @media screen and (max-width: 767px){
        font-size: 2rem;
    }
`;
const CardGrids = styled.div`
    display: grid;
    row-gap: 10px;
    column-gap: 30px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 3vh;
    @media screen and (max-width: 991px){
        margin-top: 3vh;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 30px;
    }
    @media screen and (max-width: 550px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin-top: 3vh;
        row-gap: 30px;
    }
`;
const Cards = styled.div`
    min-width: 0;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    opacity: 1;
    z-index: 2000;
    border-radius: 1rem 1rem 0.5rem 0.5rem;
    word-wrap: break-word;
    background-clip: border-box;
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(0.3rem);
    border-bottom: 0.15rem solid rgb(247, 71, 17);
    box-shadow: 1px 1px 7px rgb(0 0 0 / 13%);
    transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06) 0s;

    > .card-img{
        width: 100%;
        height: auto;
        object-position: top;
        img{
            width: 100%;
            height: 25vh;
            object-fit: cover;
            border-radius: 1rem 1rem 0rem 0rem;

            @media screen and (min-width: 767px) and (max-width: 1200px){
                height: 21vh;
            }
        }
    }

    > .card-body{
        flex: 1 1 auto;
        padding: 1rem 1rem;
        display: flex;
        min-height: 16vh;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;

        @media screen and (max-width: 550px){
            min-height: auto;
            padding: 0.7rem 1rem;
        }

        h1{
            color: rgb(247, 71, 17);
            font-size: 1rem;
            font-weight: 500;
            text-transform: uppercase;
            @media screen and (min-width: 767px) and (max-width: 1200px){
                font-size: 1rem;
            }
            @media screen and (min-width: 280px) and (max-width: 767px){
                font-size: 0.75rem;
            }
        }
        p{
            color: #000 !important;
            font-size: 0.8rem;
            margin: 1vh 0 0 0;
            @media screen and (min-width: 375px) and (max-width: 550px){
                font-size: 0.85rem;
                margin: 0.5vh 0 0 0;
                text-align: start !important;
            }
            @media screen and (min-width: 280px) and (max-width: 375px){
                font-size: 0.65rem;
                margin: 0.5vh 0 0 0;
                text-align: start !important;
            }
        }  
    }
    > .card-footer{
        flex: 1 1 auto;
        padding: 1.5rem 1rem;
        .button{
            margin-top: 0 !important;
            padding: 0.7rem 1.5rem !important;
            font-size: 1rem !important;
        }
    }

`;

export default WhyPeople;
