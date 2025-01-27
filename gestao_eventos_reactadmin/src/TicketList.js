import { 
    List, 
    Datagrid, 
    NumberField, 
    ReferenceField, 
    TextField, 
    TextInput, 
    ReferenceInput, 
    SelectInput, 
    Edit, 
    Create, 
    SimpleForm, 
    NumberInput
} from 'react-admin';

export const TicketList = () => (
    <List filters={ticketFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="type_ticket" label="Ticket Type" />
            <NumberField source="price" label="Price" />
            <ReferenceField source="eventId" reference="events" link="show">
                <TextField source="title" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const TicketEdit = () => (
    <Edit>
        <SimpleForm filters={ticketFilters}>
            <TextInput source="id" disabled />
            <TextInput source="type_ticket" label="Ticket Type" />
            <NumberInput source="price" label="Price" />
            <ReferenceInput source="eventId" reference="events">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TicketCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="type_ticket" label="Ticket Type" />
            <NumberInput source="price" label="Price" />
            <ReferenceInput source="eventId" reference="events">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const ticketFilters = [
    <TextInput source="q" label="Search" alwaysOn />, 
    <ReferenceInput source="eventId" label="Event" reference="events" perPage={100}>
    </ReferenceInput>
];
