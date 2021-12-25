import React from 'react';
import styled from 'styled-components';
import { BrandAPI } from '../API/API';
import { Fade, Slide } from 'react-awesome-reveal';
const Brand = () => {
    return (
        <>
            <Container>
                <Fade direction="left"><Titlte><h1>Out Products</h1></Titlte></Fade>
                <BrandGRid>
                    {
                        BrandAPI && BrandAPI.map((val, ind)=>{
                            return <div key={ind}>
                                    <Slide direction="up"><Wrap>
                                            <img src={val.iconSrc} alt="icon/working" />
                                            <p>{val.textCap}</p>
                                        </Wrap></Slide>
                                </div>
                        })
                    }
                </BrandGRid>
            </Container>
        </>
    );
};
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const Titlte = styled.div`
    padding: 3rem 0;
    position: relative;
    @media screen and (min-width: 280px) and (max-width: 767px){
        padding: 3rem 0 1rem 0;
    }
    h1{
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
    }
`;
const BrandGRid = styled.div`
    padding: 0;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 15px;
        gap: 15px;
        padding-bottom: 3rem;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 11px;
        gap: 11px;
        padding-bottom: 3rem;
    }
`;

const Wrap = styled.div`
    width: auto;
    height: 17vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;
    cursor: default;
    overflow: hidden;
    position: relative;
    border: 3px solid rgb(247, 134, 27, 0.5);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px;
    background: transparent;

    p{
        margin-top: 2vh;
        color: rgb(247, 134, 27, 1);
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 600;

        @media screen and (max-width: 767px){
            font-size: 0.85rem;
        }
    }

    img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
        opacity: 1;
        z-index: 1500;
        border-radius: 10px;
        transition: opacity 500ms ease-in-out 0s;

        @media screen and (max-width: 767px){
            width: 3rem;
            height: 3rem;
        }
    }
    &:hover {
        background: rgba(255, 255, 255, 0.25);
        box-shadow: rgb(31 47 71 / 5%) 0px 10px 10px, rgb(0 0 0 / 10%) 0px 1px 5px, rgb(255 255 255 / 5%) 0px 0px 0px 15px inset;
        transform: scale(1.05);
        border-color: rgb(247, 71, 17);
    }
`;
export default Brand;
