import React from 'react';
import * as S from './FieldCompany.styled.js';
import { BsBuilding } from "react-icons/bs";

export default function FieldCompany ({children}) {
    return (
        <S.Wrap>
            <S.Text>{children}</S.Text>
            <BsBuilding />
        </S.Wrap>
    )
}

