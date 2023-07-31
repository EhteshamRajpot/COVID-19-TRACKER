import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function InfoBox({title, cases, total}) {
    return(
        <Card className={"infoBox"}>
            <CardContent>
                <Typography color={"textSecondary"} className={"infoBox_title"}>{title}</Typography>
                <h2 className={"infoBox_cases"}>{cases}</h2>
                <Typography color={"textSecondary"} className={"infoBox_total"}>{total} Total</Typography>
            </CardContent>
        </Card>
    )
}