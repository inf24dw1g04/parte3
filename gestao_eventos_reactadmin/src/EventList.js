import {
    List,
    Datagrid,
    DateField,
    TextField,
    ReferenceField,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    NumberInput,
    NumberField,
    SelectInput,
    DateInput,
    TextInput,
} from "react-admin";

export const EventList = () => (
    <List filters={eventFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="date" />
            <TextField source="time" />
            <TextField source="location" />
            <NumberField source="organizerId" label="Organizer ID" />
            <ReferenceField source="organizerId" reference="organizers" link="show" />
        </Datagrid>
    </List>
);

export const EventEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="description" multiline rows={5} />
            <DateInput source="date" />
            <TextInput source="time" />
            <TextInput source="location" />
            <NumberInput source="organizerId" label="Organizer ID" />
            <ReferenceInput source="organizerId" reference="organizers">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" multiline rows={5} />
            <DateInput source="date" />
            <TextInput source="time" />
            <TextInput source="location" />
            <NumberInput source="organizerId" label="Organizer ID" />
            <ReferenceInput source="organizerId" reference="organizers">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn />, 
    <ReferenceInput source="organizerId" label="Organizer" reference="organizers" perPage={100} />,
];
