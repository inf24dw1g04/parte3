import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, description, buttonText, link }) => (
    <Card>
        <CardHeader title={title} />
        <CardContent>
            <p>{description}</p>
            <Link to={link} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                    {buttonText}
                </Button>
            </Link>
        </CardContent>
    </Card>
);

export default DashboardCard;
