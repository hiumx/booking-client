import React from 'react';
import "./_list_room.scss";
import { Link } from 'react-router-dom';

const rooms = [
    { id: 101, 
      name: "Deluxe Room",
      bed: 2, 
      price: 200
    },
    { id: 102, 
        name: "Deluxe Room",
        bed: 2, 
        price: 150
      },
      { id: 103, 
        name: "Deluxe Room",
        bed: 2, 
        price: 200
      },
      { id: 104, 
        name: "Luxury Room",
        bed: 1, 
        price: 300
      },
    

];

const List_Rooms = () => {
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this room?')) {
            console.log(`Room with ID ${id} deleted`);
        }
    };

    const handleUpdate = (id) => {
        console.log(`Update room with ID ${id}`);
        // Chuyển hướng hoặc mở form cập nhật phòng
    };

    return (
        <div className="wrapper_listRoom">
            <table className="rooms_table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Bed</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.name}</td>
                            <td>{room.bed}</td>
                            <td>${room.price}</td>
                            <td>
                                <Link to={`/system/hotel-manager/room-update?id=${room.id}`}><button className="update-btn" >Update</button></Link>
                                <button className="delete-btn" onClick={() => handleDelete(room.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List_Rooms;
