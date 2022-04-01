import React from 'react';
import * as S from './FieldLocations.styled.js';
import { BsFillPinMapFill } from "react-icons/bs";

export default function FieldLocations ({locations}) {
    return (
        <>
            {locations.map((item, index) => {
                return (
                    <S.Wrap>
                        <S.Text
                            key={`${index} ${item?.location?.city}`}
                        >
                            {item?.location?.text}
                        </S.Text>
                        <BsFillPinMapFill />
                    </S.Wrap>
                )
            })}
        </>
    )
}
