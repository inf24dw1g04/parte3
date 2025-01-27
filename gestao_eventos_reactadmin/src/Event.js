const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn />, 
    <ReferenceInput source="organizerId" label="Organizer" reference="organizers" />,
];

export const EventList = () => <List filters={postFilters}>// ...</List>;