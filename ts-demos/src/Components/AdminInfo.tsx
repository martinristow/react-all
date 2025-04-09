import {AdminInfoList} from "../types.ts";

type AdminInfoProp = {
    admin: AdminInfoList;
}

const AdminInfo = ({admin}: AdminInfoProp) => {
    return (
        <div>
            <h1>{admin.id}</h1>
            <h1>{admin.name}</h1>
            <h1>{admin.email}</h1>
            <h1>{admin.role}</h1>
            <h1>{admin.lastLogin.toLocaleString()}</h1>

        </div>
    )
}
export default AdminInfo
