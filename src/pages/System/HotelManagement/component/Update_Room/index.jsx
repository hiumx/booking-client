
import { Link, useNavigate } from "react-router-dom"
import "./_update_room.scss"



const Update_Room = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(-1);
    }


    return (
<div class="update-room">
        <form id="update-room-form">
            <h2 className="title_updateRoom">Update Room</h2>
            <div class="form-group_UR">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div class="form-group_UR">
                <label for="bed">Bed Number</label>
                <input type="number" id="bed" min={1} max={3} name="bed"/>
            </div>
            <div class="form-group_UR">
                <label for="price">Price:</label>
                <input type="text" id="price" name="price"/>
            </div>
            <Link to={'/system/hotel-manager/rooms'}><button type="submit" class="submit-btn" onClick={handleClick}>Update Room</button></Link>
        </form>
    </div>
    )
}

export default Update_Room
