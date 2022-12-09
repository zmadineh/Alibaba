import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {internalCities} from "../../../data/internalCities.data";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CustomDropDown from "../../common/search-form/input-components/CustomDropDown";
import SingleDropDown from "../../common/search-form/input-components/SingleDropDown";


interface InternalFlightSearchFormProps {
    mainForm: searchFromValue,
    setMainForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
}

export default function BusTicketSearchForm({mainForm, setMainForm} : InternalFlightSearchFormProps) {

    const inputData = internalCities;

    const [form, setForm] = useState<searchFromValue>({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        passengerCount: {adult: 1, child: 0, baby: 0},
        formType: 3,
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form,[event.target.name] : event.target.value});
    }

    const handleChangeWithName = (name: string, value: string) => {
        setForm({...form,[name] : value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form)
        setMainForm(form)
    }

    return (
        <Grid padding={2}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>
                    <Grid item xs={12} md={6}>
                        <SwappableInput
                            firstInputName={'origin'}
                            secondInputName={'destination'}
                            firstData={inputData}
                            secondData={inputData}
                            firstLabel={'مبدا (شهر، پایانه)'}
                            secondLabel={'مقصد (شهر، پایانه)'}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                            iconName={'location'}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SingleDropDown
                            firstLabel={'تاریخ حرکت'}
                            firstName={'departureDate'}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                            iconName={'calender'}
                        />
                    </Grid>

                    {/*<Grid item xs={12} md={3}>*/}
                    {/*    <PassengerCountInput*/}
                    {/*        form={form}*/}
                    {/*        setForm={setForm}*/}
                    {/*        name={'passengerCount'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={2}>
                        <Button type={"submit"} variant={"contained"} size={"medium"} sx={{height: '100%', width: '100%'}}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}