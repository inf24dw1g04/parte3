import { Card, CardContent, CardHeader, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchSections = async () => {
            const data = [
                {
                    title: "Organizers",
                    description: "Manage event organizers and their roles.",
                    buttonText: "View Organizers",
                    link: "/organizers",
                },
                {
                    title: "Events",
                    description: "View and manage all events.",
                    buttonText: "View Events",
                    link: "/events",
                },
                {
                    title: "Tickets",
                    description: "Manage and view tickets for your events.",
                    buttonText: "View Tickets",
                    link: "/tickets",
                },
                {
                    title: "Participants",
                    description: "See and manage event participants.",
                    buttonText: "View Participants",
                    link: "/participants",
                },
            ];
            setSections(data);
        };

        fetchSections();
    }, []);

    return (
        <Card>
            <CardHeader title="Welcome To Your Dashboard" />
            <CardContent>
                <Typography variant="body1">Lorem ipsum sic dolor amet...</Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {sections.map((section, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardHeader title={section.title} />
                                <CardContent>
                                    <Typography variant="body2">{section.description}</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to={section.link}
                                        sx={{ mt: 1 }}
                                    >
                                        {section.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};
