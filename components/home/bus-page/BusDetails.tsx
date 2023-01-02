import React from "react";

import SectionDetails from "./SectionDetails";
import CardsContainer from "./cards/CardsContainer";
import DetailCard from "./cards/DetailCard";

import {busTicketCardData} from "../../../data/bus-page/busCards.data";
import {busCompaniesData} from "../../../data/bus-page/busCompanies.data";

import {sectionDataType} from "../../../model/section/sectionDataType";

import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";


interface BusDetailsPropsType {
    sections: sectionDataType[]
}

export default function BusDetails ({sections} : BusDetailsPropsType) {

    return (
        <Grid container py={3} px={{xs: 2, md: 0}}>
            {sections.map(section => (
                <Grid key={section.id} container item mt={5} gap={3}>
                    <SectionDetails key={section.id} title={section.title} body={section.body} more={section.more} />

                    {(section.id === 1) &&
                        <CardsContainer maxHeight={{xs: '250px', sm: '650px'}}>
                            {busTicketCardData.slice(0,3).map(cardItem => (
                                <DetailCard
                                    key={cardItem.id}
                                    cardData={cardItem}
                                    maxWidthXs={'350px'}
                                    maxWidthSm={'350px'}
                                    maxWidthMd={'370px'}
                                    minHeight={'560px'}
                                />
                            ))}
                        </CardsContainer>
                    }

                    {(section.id === 2) &&
                        <CardsContainer maxHeight={{xs: '250px', sm: '650px'}}>
                            {busTicketCardData.slice(-2).map(cardItem => (
                                <DetailCard
                                    key={cardItem.id}
                                    cardData={cardItem}
                                    maxWidthXs={'350px'}
                                    maxWidthSm={'500px'}
                                    maxWidthMd={'570px'}
                                    minHeight={'460px'}
                                />
                            ))}
                        </CardsContainer>
                    }

                    {(section.id === 4) &&
                        <CardsContainer maxHeight={{xs: '100px', sm: '100px'}}>
                            {busCompaniesData.map(cardItem => (
                                <Grid key={cardItem.id} item container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} maxWidth={'120px'}>
                                    <Grid item container alignItems={"center"} justifyContent={"center"} sx={{height: '50px'}}>
                                        <Image src={cardItem.image} alt={cardItem.title} />
                                    </Grid>

                                    <Typography>
                                        {cardItem.title}
                                    </Typography>
                                </Grid>
                            ))}
                        </CardsContainer>
                    }
                    {(section.id === 4) &&
                        busCompaniesData.map(dataItem => (
                            (dataItem.body !== '') && <SectionDetails key={dataItem.id} title={dataItem.title} body={dataItem.body} more={''} />
                            ))}

                </Grid>
            ))}
        </Grid>
    )
}