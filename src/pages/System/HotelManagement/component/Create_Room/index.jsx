import "./_create_room.scss"
import { useNavigate, Link } from "react-router-dom"



const Create_Room = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return(
<div class="create-room">
        <form id="create-room-form">
            <h2 className="title_createRoom">Create Room</h2>
            <div class="form-group_CR">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div class="form-group_CR">
                <label for="bed">Bed Number</label>
                <input type="number" id="bed" min={1} max={3} name="bed"/>
            </div>
            <div class="form-group_CR">
                <label for="price">Price:</label>
                <input type="text" id="price" name="price"/>
            </div>
            <Link to={'/system/hotel-manager/rooms'}><button type="submit" class="submit-btn" onClick={handleClick}>Create Room</button></Link>
        </form>
    </div>
    )
}

export default Create_Room