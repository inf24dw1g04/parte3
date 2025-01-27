// in src/MyEmailField.tsx
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const MyEmailField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={`mailto:${record[source]}`} sx={{ textDecoration: "none" }}>
            {record[source]}
            <MailOutlineIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    ) : null;
};

export default MyEmailField;