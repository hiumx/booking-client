import Sidebar from "~/pages/System/components/Sidebar/Sidebar"
import List_Rooms from "../../component/List_Room"
import "./_room_management.scss"
import NavbarSystem from "~/pages/System/components/NavbarSystem/NavbarSystem"

const RoomManagement = () => {

    return (
        <div className="wrapper">
            <Sidebar listItem={[ "Hotels", "Create_Room"]}/>
            <div className="content">
                <NavbarSystem/>
                <List_Rooms/>
            </div>
        </div>
    )
}

export default RoomManagement