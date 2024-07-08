import "./_hotel_management_create.scss"
import Sidebar from "~/pages/System/components/Sidebar/Sidebar"
import Create_Hotel from "../../component/Create_Hotel"
import NavbarSystem from "~/pages/System/components/NavbarSystem/NavbarSystem"



const HotelManagement_Create = () => {

    return (
        <div className="hotel-management">
            <Sidebar listItem={["Hotels", "Create_Hotel"]}/>
            <div className="content">
                <Create_Hotel/>
            </div>
        </div>
    )
}

export default HotelManagement_Create