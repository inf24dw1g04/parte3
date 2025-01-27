import { Admin, Resource, ShowGuesser } from "react-admin"; 
import lb4Provider from "react-admin-lb4";
import { OrganizerCreate, OrganizerEdit, OrganizerList } from "./OrganizerList";
import { EventList, EventEdit, EventCreate } from "./EventList";
import { TicketList, TicketEdit, TicketCreate } from "./TicketList";
import { PartricipantList, PartricipantEdit, PartricipantCreate } from "./PartricipantList";

// Icons
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import UserIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";

import Dashboard from "./Dashboard/Dashboard";
import { authProvider } from "./authProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const dataProvider = lb4Provider("http://127.0.0.1:3000/");
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="organizers" list={OrganizerList} show={ShowGuesser} edit={OrganizerEdit} create={OrganizerCreate} icon={WorkIcon} />
    <Resource name="events" list={EventList} show={ShowGuesser} edit={EventEdit} create={EventCreate} icon={EventIcon} />
    <Resource name="tickets" list={TicketList} show={ShowGuesser} edit={TicketEdit} create={TicketCreate} icon={ConfirmationNumberIcon} />
    <Resource name="partricipants" list={PartricipantList} show={ShowGuesser} edit={PartricipantEdit} create={PartricipantCreate} icon={UserIcon} />
  </Admin>
);

export default App;