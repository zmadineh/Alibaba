import React from "react";

export interface priceRangeType {
    min: number,
    max: number,
}

export interface shoppingObjType {
    systematic: boolean,
    chartered: boolean,
}

export interface timeRangeType {
    min: {hours: number, minutes: number},
    max: {hours: number, minutes: number},
}

export interface filterStatesPropsType {
    allCompanies: boolean,
    setAllCompanies: React.Dispatch<React.SetStateAction<boolean>>,
    companies: number[],
    setCompanies: React.Dispatch<React.SetStateAction<number[]>>,
    showAvailable: boolean,
    setShowAvailable: React.Dispatch<React.SetStateAction<boolean>>,
    shoppingType: shoppingObjType,
    setShoppingType: React.Dispatch<React.SetStateAction<shoppingObjType>>,
    priceRange: priceRangeType,
    setPriceRange: React.Dispatch<React.SetStateAction<priceRangeType>>,
    departureTime: timeRangeType,
    setDepartureTime: React.Dispatch<React.SetStateAction<timeRangeType>>,
    transportTypeId: number,
    defaultPriceRange: priceRangeType,
    // ticketCount: number,
}