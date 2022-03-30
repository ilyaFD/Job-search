import styled from 'styled-components';

export const Container = styled.div`
    width: 1170px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 100px auto;
    border-radius: 40px;
    border: 2px solid #f2f5fa;
    padding: 4rem;
    > * {
        margin-bottom: 2.6rem;
    }
    > *:last-child {
        margin-bottom: 0;
    }
    @media (max-width: 1200px) {
        width: 970px;
    }
    @media (max-width: 992px) {
        width: 750px;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        border-radius: 0;
        border: none;
        padding: 2rem;
    }
`;

export const ListHeader = styled.p`
    background-color: #f5e6f4;
    text-align: center;
    color: #24314a;
    padding: 20px;
    border-radius: 10px;
`;

export const Title = styled.p`
    font-size: 2.5rem;
    font-weight: 400;
`;

export const Input = styled.input`
    border-radius: 1.5rem;
    width: 100%;
    outline: none;
    border: none;
    font-size: 1.2rem;
    height: 3rem;
    padding: 0 1.6rem;
    font-size: 16px;
    color: #080d3e;
    &::-webkit-input-placeholder {
        color: #697783;
        font-size: 1.2rem;
    }
`;

export const Span = styled.span`
    color: #6d7985;
    font-size: 15px;
`;

export const Point = styled.span`
    background-color: #f1ebfd;
    color: #8455eb;
    padding: 10px;
    font-size: 14px;
    border-radius: 7px;
`;

export const ContentBox = styled.div`
    background-color: white;
    padding: 2.6rem;
    border-radius: 10px;
    webkit-box-shadow: 0px 16px 30px 3px rgb(8 13 62 / 6%);
    box-shadow: 0px 16px 30px 3px rgb(8 13 62 / 6%);
    font-size: 18px;
    line-height: 1.7;
    > p {
        margin-bottom: 30px;
    }
    @media (max-width: 768px) {
        padding: 1.7rem;
        font-size: 16px;
    }
`;

export const Row = styled.div`
    display: flex;
    > * {
        margin: 0 30px 0 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        > * {
            margin: 0 0 15px 0;
        }
        > *:last-child {
            margin: 0;
        }
    }
`;

export const Loader = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    font-weight: 600;
`;





