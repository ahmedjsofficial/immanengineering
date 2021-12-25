import React from 'react';
import styled from 'styled-components';

const Form = () => {
    return (
        <>
            <Section>
                <Container>
                    <Text><h1 className="disney-titles">Get in Touch 24/7</h1><p>Contact with Imaan Engineering - We're here to help and answer any questions you might have. We look forward to hearing from you.</p></Text>
                    <FormData data-aos="zoom-in-up">
                        <div className="input-group">
                            <input autoComplete="off" required={true} maxLength="21" placeholder="First Name" type="text" name="fName" />
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Last Name" type="text" name="lName" />
                        </div>
                        <div className="input-group">
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Email Adress" type="email" name="email" />
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Phone Number" type="text" name="phone" />
                        </div>
                        <div className="input-group">
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Province Name" type="text" name="province" />
                            <input autoComplete="off" required={true} maxLength="21" placeholder="City Name" type="text" name="city" />
                        </div>
                        <div className="input-group">
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Monthly Electric Units" type="text" name="billunit" />
                            <input autoComplete="off" required={true} maxLength="21" placeholder="Bill Reference No" type="text" name="refrence" />
                        </div>
                        <textarea placeholder="Type Your Message Here!!" wrap="on" cols="30" rows="7"></textarea>
                        <SubmitButton type="submit" data-aos="zoom-up">
                            <span>Submit</span>
                        </SubmitButton>
                    </FormData>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    padding: 5rem 0;
`;
const Container = styled.div`
    width: 65%;
    margin: 0 auto;
    @media screen and (min-width: 767px) and (max-width: 1200px){
        width: 85%;
    }
    @media screen and (min-width: 550px) and (max-width: 767px){
        width: 95%;
    }
    @media screen and (min-width: 280px) and (max-width: 550px){
        width: 81%;
    }
`;
const Text = styled.div`
    text-align: center;

    p{
        display: block;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 2vh !important;
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 0.75rem;
        }
    }
`;
const FormData = styled.form`
    margin: 5vh 0 5vh 0;
    @media screen and (min-width: 280px) and (max-width: 550px){
        margin: 5vh 0 0 0;
    }
    display: grid;
    row-gap: 30px;
    column-gap: 30px;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    > .input-group{
        display: grid;
        row-gap: 20px;
        column-gap: 30px;
        grid-template-columns: repeat(2, minmax(0, 1fr));

        @media screen and (min-width: 280px) and (max-width: 550px){
            grid-template-columns: repeat(1, minmax(0, 1fr));
            row-gap: 30px;
            column-gap: 30px;
        }

        input{
            opacity: 1;
            width: auto;
            height: auto;
            z-index: 1500;
            outline: none;
            display: flex;
            align-items: flex-start;
            position: relative;
            font-size: 0.9rem;
            font-weight: 400;
            cursor: default;
            border-radius: 0.345rem;
            color: rgb(247, 71, 17);
            padding: 1rem 1rem;
            backdrop-filter: blur(0.1rem);
            border: 1px solid rgba(249,249,249,1);
            background-color: rgba(255, 255, 255, 1);
            backdrop-filter: blur(1rem);
            box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
            border-bottom: 0.15rem solid rgb(247, 71, 17) !important;

            &::placeholder{
                color: #000;
            }
        }
    }
    textarea{
        opacity: 1;
        width: auto;
        height: auto;
        z-index: 1500;
        outline: none;
        display: flex;
        align-items: flex-start;
        position: relative;
        font-size: 0.9rem;
        cursor: default;
        font-weight: 400;
        border-radius: 0.345rem;
        text-transform: uppercase;
        color: rgb(247, 71, 17);
        padding: 1rem 1rem;
        backdrop-filter: blur(0.1rem);
        border: 1px solid rgba(249,249,249,1);
        background-color: rgba(255, 255, 255, 1);
        backdrop-filter: blur(1rem);
        box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
        border-bottom: 0.15rem solid rgb(247, 71, 17) !important;

        &::placeholder{
            color: #000;
        }
    }
`;
const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0.7rem 0;
    border-radius: 0.245rem;
    background: linear-gradient(209.21deg, rgb(247, 134, 27) 13.57%, rgb(247, 71, 17) 58.38%) !important;
    backdrop-filter: blur(1rem);
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.1);
    transition: all 200ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;

    &:hover{
        box-shadow: rgb(31 47 71 / 25%) 0px 20px 40px, rgb(0 0 0 / 10%) 0px 1px 5px, rgb(255 255 255 / 40%) 0px 0px 0px 0.5px inset;
        border: 1px solid rgb(247, 71, 17);
        transform: translateY(-5px);
    }

    span{
        color: #fff;
        outline: none;
        border: none;
        z-index: 1500;
        opacity: 1;
        font-size: 1.5rem;
        font-weight: 500;
        transition: all 100ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;

        @media screen and (max-width: 550px){
            font-size: 1rem;
        }
    }
`;
export default Form;
