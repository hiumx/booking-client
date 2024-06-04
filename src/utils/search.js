export const filterByType = ({ type, payload }) => {
    return payload?.filter(item => (item?.typeHotel?.name.includes(type) || item?.typeHotel?.name.includes(type.toLowerCase())));
}