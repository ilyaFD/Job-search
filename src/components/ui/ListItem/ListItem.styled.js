import styled from 'styled-components';

export const Wrap = styled.div`
    background-color: white;
    padding: 2.6rem;
    border-radius: 10px;
    webkit-box-shadow: 0px 16px 30px 3px rgb(8 13 62 / 6%);
    box-shadow: 0px 16px 30px 3px rgb(8 13 62 / 6%);
    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 25px 0 0;
    @media (max-width: 768px) {
        margin: 0 0 15px 0;
    }
`;

export const Header = styled.div`
    display: flex;
    margin-bottom: 25px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const HeaderCenter = styled.div`
    align-self: center;
    @media (max-width: 768px) {
        align-self: flex-start;
        margin-bottom: 5px;
    }
`;

export const HeaderRight = styled.span`
    margin-left: auto;
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Title = styled.p`
    font-size: 21px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;