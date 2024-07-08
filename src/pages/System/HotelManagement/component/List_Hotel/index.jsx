import "./_list_hotel.scss";
import NavbarSystem from "~/pages/System/components/NavbarSystem/NavbarSystem";
import { Link } from "react-router-dom";

const LIST_HOTELS = [
    {
      id: 1,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 2,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 3,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 4,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 5,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 6,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 7,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
    {
      id: 8,
      name: "JW Marriott Hotel Hanoi",
      description: "the pinnacle of comfort luxury and class",
      location: "Ha Noi"
    },
]

const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this hotel forever?')) {
      console.log(`Hotel with ID ${id} deleted`);
  }
};

const ListItem = () => {
  return (
    <div className="wrapper">
        <div className="list_hotels">
              <table className="hotels_table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {LIST_HOTELS.map((hotel) => (
                    <tr key={hotel.id}>
                      <td>{hotel.id}</td>
                      <td>{hotel.name}</td>
                      <td>{hotel.description}</td>
                      <td>{hotel.location}</td>
                      <td>
                        <Link to={`/system/hotel-manager/hotel?id=${hotel.id}`}><button className="list-btn">View detail</button></Link>
                        <Link to={`/system/hotel-manager/hotel-update?id=${hotel.id}`}><button className="update-btn">Update</button></Link>
                        <button className="delete-btn" onClick={() => handleDelete(hotel.id)}>Delete</button>
                      </td>
                    </tr>
                  ))} 
                </tbody>
              </table>
      </div>
    </div>
  )
}

export default ListItem;
