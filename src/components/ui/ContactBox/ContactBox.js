import React from 'react';
import * as S from './ContactBox.styled.js';
import { BsFillPersonFill } from "react-icons/bs";

export default function ContactBox ({
    email,
    name,
    phone
}) {
    return (
        <S.Wrap>
            <S.Avatar>
                <BsFillPersonFill />
            </S.Avatar>
            <S.Content>
                {!!name && <S.Name>{name}</S.Name>}
                {!!phone && <S.Link href={`tel:${phone}`}>{phone}</S.Link>}
                {!!email && <S.Link href={`mailto:${email}`}>{email}</S.Link>}
            </S.Content>
        </S.Wrap>
    )
}
