import React from "react";
import { useLocation } from "react-router-dom";
import * as S from '../ui/index.styled';
import {
    ContactBox,
    FieldLocations,
    FieldDate,
    FieldCompany
} from "../ui/";
import { Link } from "react-router-dom";

export default function Job () {
    const { state } = useLocation()
    const {
        title,
        from_date,
        company,
        descr,
        skills,
        contact,
        locations
    } = state;

    return (
        <S.Container>
            <div><Link to={`/`}>{'< Back'}</Link></div>
            <S.Title>{title}</S.Title>
            <S.Row>
                {!!company?.name && <FieldCompany>{company?.name}</FieldCompany>}
                {!!locations.length && <FieldLocations locations={locations} />}
                {!! from_date && <FieldDate>{from_date}</FieldDate>}
            </S.Row>
            <S.ContentBox>
                <p dangerouslySetInnerHTML={{ __html: descr.replace(/<strong>|<\/strong>|<em>|<\/em>/g, "") }} />
                <p dangerouslySetInnerHTML={{ __html: skills.replace(/<strong>|<\/strong>|<em>|<\/em>/g, "") }} />
            </S.ContentBox>
            <ContactBox {...contact} />
        </S.Container>
    );
}
