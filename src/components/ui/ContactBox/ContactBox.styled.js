import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 1.5rem;
`;

export const Avatar = styled.div`
    min-width: 80px;
    min-height: 80px;
    border-radius: 40px;
    margin-right: 30px;
    font-size: 50px;
    color: #a682f8;
    background-color: #ecf1fb;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        min-width: 50px;
        min-height: 50px;
        border-radius: 25px;
        margin-right: 15px;
        font-size: 30px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const Link = styled.a`
    margin-top: 10px;
    background-color: #a682f8;
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    ont-weight: 500;
    margin-top: 15px;
    :hover,
    :focus {
        color: white;
    }
`;