import React from "react";
import Typography from "@mui/material/Typography/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";

interface CustomParagraphProps {
    title: string,
    description: string,
    readMore: string,
    maxWidth?: string,
    textCenter?: boolean,
    alignItems?: string
}
export default function CustomParagraph({title, description, readMore, maxWidth, textCenter=false, alignItems}: CustomParagraphProps){
    return (
        <Grid display={"flex"} flexDirection={"column"} alignItems={alignItems} textAlign={(textCenter ? 'center' : "unset")}>
            <Typography variant={'h5'} fontWeight={'600'} my={'1.5rem'}>{title}</Typography>
            <Typography variant={'body1'} maxWidth={maxWidth}>{description}</Typography>
            {readMore !== '' ?
                <Link href={readMore}>
                    <Typography color={'secondary'}> بیشتر بخوانید</Typography>
                </Link>
                : null}
        </Grid>
    )
}