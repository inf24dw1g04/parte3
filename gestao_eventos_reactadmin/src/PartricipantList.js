import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from "react-admin";
import MyEmailField from './MyEmailField';

export const PartricipantList = () => (
    <List>
        <Datagrid filters={participantFilters}>
            <TextField source="id" />
            <TextField source="name" />
            <MyEmailField source="email" />
            <TextField source="status" />
            <ReferenceField source="ticketId" reference="tickets" />
        </Datagrid>
    </List>
);

export const PartricipantEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="status" />
            <ReferenceInput source="ticketId" reference="tickets">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const PartricipantCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="status" />
            <ReferenceInput source="ticketId" reference="tickets">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const participantFilters = [
    <TextInput source="q" label="Search" alwaysOn />, 
    <ReferenceInput source="ticketId" label="Ticket" reference="tickets" perPage={100}>
    </ReferenceInput>
];
