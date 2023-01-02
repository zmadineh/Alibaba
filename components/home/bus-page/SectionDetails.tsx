import React, {useState} from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

interface SectionDetailsPropsType {
    title: string,
    body: string,
    more: string,
}

export default function SectionDetails({title, body, more} : SectionDetailsPropsType) {

    const [showMore, setShowMore] = useState(false)

    return (
        <Grid item container>
            <Typography variant={'h6'} fontWeight={600} my={2}>
                {title}
            </Typography>
            <Typography>
                {body}
                {more !== "" && '...'}
                {(!showMore && more !== '') &&
                    <Button variant={"text"} sx={{ color: "secondary.main", backgroundColor: "inherit" }} onClick={() => setShowMore(true)}>
                        {'بیشتر بخوانید'}
                        <ArrowDropDown/>
                    </Button>
                }
                {showMore && more}
                {(showMore && more !== '') &&
                    <Button variant={"text"} sx={{ color: "secondary.main" }} onClick={() => setShowMore(false)}>
                        {'بستن'}
                        <ArrowDropUp/>
                    </Button>
                }
            </Typography>
        </Grid>
    )
}