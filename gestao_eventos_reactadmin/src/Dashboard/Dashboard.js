import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardHeader } from "@mui/material";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import DashboardCard from "./DashboardCard";
import { useDataProvider } from "react-admin";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
    const [sections, setSections] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [barData, setBarData] = useState([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        const resources = [
            {
                name: "organizers",
                title: "Organizers",
                description: "Manage event organizers and their roles.",
                buttonText: "View Organizers",
                link: "/organizers",
            },
            {
                name: "events",
                title: "Events",
                description: "View and manage all events.",
                buttonText: "View Events",
                link: "/events",
            },
            {
                name: "tickets",
                title: "Tickets",
                description: "Manage and view tickets for your events.",
                buttonText: "View Tickets",
                link: "/tickets",
            },
            {
                name: "partricipants",
                title: "Participants",
                description: "See and manage event participants.",
                buttonText: "View Participants",
                link: "/partricipants",
            },
        ];

        setSections(resources);

        const fetchChartData = async () => {
            try {
                const promises = resources.map((resource) =>
                    dataProvider.getList(resource.name, { pagination: { page: 1, perPage: 1 }, sort: { field: "id", order: "ASC" } })
                );

                const results = await Promise.all(promises);

                const pieChartData = results.map((result, index) => ({
                    name: resources[index].title,
                    value: result.total,
                }));
                setPieData(pieChartData);

                const ticketsResponse = await dataProvider.getList("tickets", {
                    pagination: { page: 1, perPage: 100 },
                    sort: { field: "price", order: "ASC" },
                });

                const ticketPrices = ticketsResponse.data.map((ticket) => ticket.price);
                const barChartData = [
                    { priceRange: "0-10€", tickets: ticketPrices.filter((price) => price <= 10).length },
                    { priceRange: "11-20€", tickets: ticketPrices.filter((price) => price > 10 && price <= 20).length },
                    { priceRange: "21-30€", tickets: ticketPrices.filter((price) => price > 20 && price <= 30).length },
                    { priceRange: "31-50€", tickets: ticketPrices.filter((price) => price > 30 && price <= 50).length },
                ];
                setBarData(barChartData);
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchChartData();
    }, [dataProvider]);

    return (
        <div style={{ padding: "20px" }}>
            <Grid container spacing={3}>
                {sections.map((section, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <DashboardCard {...section} />
                    </Grid>
                ))}

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Distribution Overview" />
                        <CardContent>
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Tickets Sold by Price Range" />
                        <CardContent>
                            <BarChart width={400} height={300} data={barData}>
                                <XAxis dataKey="priceRange" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="tickets" fill="#82ca9d" />
                            </BarChart>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
