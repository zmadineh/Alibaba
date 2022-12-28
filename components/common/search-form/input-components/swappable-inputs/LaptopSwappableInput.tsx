import React, {useCallback, useState} from "react";
import CustomAutocomplete from "../CustomAutocomplete";
import SwappableTemplate from "./SwappableTemplate";

import {searchFromValue} from "../../../../../model/searchFormValue.type";
import {data} from "../../../../../model/data.type";
import {getTitleArray} from "../../../../../helper/getTitleArray.helper";
import {swappableInputsDetailType} from "../../../../../model/swappableInputsDetail.type";


interface SwappableInputProps {
    details: swappableInputsDetailType[],
    values: {[key: string]: string},
    flipData: () => void
    listWidth?: string,
    error: {[key: string]: boolean},
    errorMessage: string,
    validationData: (name:string, value: string) => boolean,
}

export default function LaptopSwappableInput(props : SwappableInputProps) {

    const {details, flipData, listWidth = '100%', error, errorMessage, validationData, values} = props

    const borderRadius = {r1: "0 8px 8px 0", r2: "8px 0 0 8px"};

    return (
        <SwappableTemplate
            children1={
                <CustomAutocomplete
                    detail={details[0]}
                    values={values}
                    borderRadius={borderRadius.r2}
                    listWidth={listWidth}
                    error={error[details[0].name]}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }
            children2={
                <CustomAutocomplete
                    detail={details[1]}
                    values={values}
                    borderRadius={borderRadius.r1}
                    listWidth={listWidth}
                    error={error[details[1].name]}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }
            flipData={flipData}
        />
    )
}