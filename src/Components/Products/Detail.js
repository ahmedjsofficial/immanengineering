import React from 'react';
import styled from 'styled-components';
import { DetailAPI } from '../API/API';
import { Fade } from 'react-awesome-reveal';
const Detail = () => {
    return (
        <>
            <Section>
                <Container>
                    <TexContext>
                        {
                            DetailAPI && DetailAPI.map((val,ind)=>(
                                <div key={ind}><Fade direction="up"><div><h1 className="disney-titles">{val.title}</h1><p>{val.text1}</p><img src={val.detialImg} alt="solar/img" /><p>{val.text2}</p><p>{val.text3}</p></div></Fade></div>
                            ))
                        }
                    </TexContext>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    padding: 3rem 0;
`;
const Container = styled.div`
    width: 55%;
    margin: 0 auto;
    @media screen and (min-width: 280px) and (max-width: 991px){
        width: 95%;
    }
`;
const TexContext = styled.div`
    p{
        margin: 3vh 0;
        @media screen and (max-width: 600px){
            font-size: 0.8rem;
        }
        @media screen and (max-width: 375px){
            font-size: 0.7rem;
        }
    }
    img{
        width: 100%;
        height: auto;
        max-width: 650px;
        z-index: 1500;
        
        @media screen and (min-width: 500px) and (max-width: 1200px){
            height: 45vh;
            width: 100%;
            object-fit: contain;
        }
        @media screen and (min-width: 280px) and (max-width: 500px){
            height: auto;
            max-width: 500px;
            object-fit: cover;
        }
        &:hover{
            transform: scale(1.05);
        }
    }

`;
export default Detail;
