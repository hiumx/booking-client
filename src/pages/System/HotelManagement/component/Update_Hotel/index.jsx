import "./_update_hotel.scss";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const LIST_HOTELS = [
  // Danh sách khách sạn của bạn
];

const UpdateHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const hotel = LIST_HOTELS.find(h => h.id === parseInt(id));

  }, [id]);


  return (
    <div class="update-form-wrapper">
        <div class="update-form-container">
            <h2 class="update-title">Update Hotel</h2>
            <form id="update-hotel-form" onsubmit="handleSubmit(event)">
                <div class="update-form-group">
                    <label for="update-name" class="update-label">Name</label>
                    <input type="text" id="update-name" name="name" class="update-input-field" />
                </div>
                <div class="update-form-group">
                    <label for="update-description" class="update-label">Description</label>
                    <input type="text" id="update-description" name="description" class="update-input-field"/>
                </div>
                <div class="update-form-group">
                    <label for="update-location" class="update-label">Location</label>
                    <input type="text" id="update-location" name="status" class="update-input-field"/>
                </div>
                <div class="update-form-group">
                    <label for="update-rate" class="update-label">Rate</label>
                    <input type="number" id="update-rate" name="rate" class="update-input-field"/>
                </div>
                <div class="update-form-group">
                    <label for="update-image" class="update-label">From Center</label>
                    <input type="url" id="update-image" name="from_center" class="update-input-field"/>
                </div>

                <Link to={'/system/hotel-manager/hotels'} > <button type="submit" class="update-btn update-btn-save" >Save</button></Link>

            </form>
        </div>
    </div>
  );
};

export default UpdateHotel;