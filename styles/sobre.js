import styled from 'styled-components';

export const Wraper = styled.div`
    background: White;
    color: #808080;
`

export const Content = styled.div`
    display: flex;
    margin: 0 20px;

    & > img {
        margin: 0 auto;
        display: block;
        max-height: 500px;

        @media (max-width: 600px) {
            max-width: 90%;
            height: fit-content;
        }
    }
    
    @media (max-width: 1000px) {
        display: block;        
    }
`

export const History = styled.div`
    padding: 0 30px;
    font-family: system-ui;

    @media (max-width: 1000px) {
        padding-top: 50px;
        padding: 50px 20px 0;
    }
`
