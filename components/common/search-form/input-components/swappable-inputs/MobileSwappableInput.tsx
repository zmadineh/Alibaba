import React, {useState} from "react";

import InputSelector from "../InputSelector";
import SwappableTemplate from "./SwappableTemplate";


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

export default function MobileSwappableInput(props : SwappableInputProps) {

    const {details, flipData, error, errorMessage, validationData, values} = props

    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);

    return (
        <SwappableTemplate
            children1={
                <InputSelector
                    detail={details[0]}
                    open={openFirst}
                    setOpen={setOpenFirst}
                    values={values}
                    error={error[details[0].name]}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }
            children2={
                <InputSelector
                    detail={details[1]}
                    open={openSec}
                    setOpen={setOpenSec}
                    values={values}
                    error={error[details[1].name]}
                    errorMessage={errorMessage}
                    validationData={validationData}
                />
            }
            flipData={flipData}
        />
    )
}