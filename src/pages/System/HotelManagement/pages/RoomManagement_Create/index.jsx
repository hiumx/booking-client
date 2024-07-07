import Sidebar from "~/pages/System/components/Sidebar/Sidebar"
import "./_room_management.scss"
import Create_Room from "../../component/Create_Room"



const RoomManagement_Create = () => {

    return(
        <div className="room-management">
            <Sidebar listItem={["Hotels"]}/>
            <div className="content">
                <Create_Room/>
            </div>
        </div>
    )
}

export default RoomManagement_Create