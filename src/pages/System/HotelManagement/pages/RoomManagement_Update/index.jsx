import Sidebar from "~/pages/System/components/Sidebar/Sidebar"
import Update_Room from "../../component/Update_Room"


const RoomManagement_Update = () => {

    return (
        <div className="hotel-management">
        <Sidebar listItem={["Hotels"]}/>
        <div className="content">
            <Update_Room/>
        </div>
      </div>
    )
    
}

export default RoomManagement_Update