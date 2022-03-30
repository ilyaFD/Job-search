import React from 'react';
import { Link } from "react-router-dom";
import * as S from './ListItem.styled';
import { Span, Point, ContentBox } from '../index.styled';

export default function ListItem (props) {
    return (
        <div>
            <Link to={`/job/${props.id}`} state={props}>
                <ContentBox>
                    <S.Header>
                        {!!props.company?.logo && <S.Logo src={props.company?.logo} alt={props.company?.name}/>}
                        <S.HeaderCenter>
                            <S.Title>{props.title}</S.Title>
                            <Span className="item__subtitle">{props.from_date}</Span>
                        </S.HeaderCenter>
                        <S.HeaderRight>{props.employment_type}</S.HeaderRight>
                    </S.Header>
                    <Point>{props.function}</Point>
                </ContentBox>
            </Link>
        </div>
    )
}
