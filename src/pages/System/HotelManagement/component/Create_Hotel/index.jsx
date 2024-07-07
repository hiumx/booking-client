import { Link } from "react-router-dom"
import "./_create_hotel.scss"



const Create_Hotel = () => {

    return (
        <div class="create-wrapper">
        <div class="create-form-container">
            <h1 class="create-title">Create Hotel</h1>
            <form id="create-hotel-form" onsubmit="handleCreateSubmit(event)">
                <div class="create-form-group">
                    <label for="create-name" class="create-label">Name</label>
                    <input type="text" id="create-name" name="name" required class="create-input"/>
                </div>
                <div class="create-form-group">
                    <label for="create-description" class="create-label">Description</label>
                    <input type="text" id="create-description" name="description" required class="create-input"/>
                </div>
                <div class="create-form-group">
                    <label for="create-location" class="create-label">Location</label>
                    <input type="text" id="create-location" name="location" required class="create-input"/>
                </div>
                <div class="create-form-group">
                    <label for="create-rate" class="create-label">Rate</label>
                    <input type="text" id="create-rate" name="rate" required class="create-input"/>
                </div>
                <div class="create-form-group">
                    <label for="create-location" class="create-label">From Center</label>
                    <input type="text" id="create-location" name="from_center" required class="create-input"/>
                </div>

                <Link to={'/system/hotel-manager/hotels'}><button type="submit" class="create-button create-submit">Create Hotel</button></Link>
            </form>
        </div>
    </div>
    )
}

export default Create_Hotel