import React from 'react';
import * as S from './FieldDate.styled.js';
import { BsCalendar3 } from "react-icons/bs";

export default function FieldDate ({children}) {
    return (
        <S.Wrap>
            <S.Text>{children}</S.Text>
            <BsCalendar3 />
        </S.Wrap>
    )
}
