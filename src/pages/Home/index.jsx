import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import DefaultLayout from '~/layouts/DefaultLayout'
import { getConvenient } from '~/store/actions/convenient.action';
import { getTypesHotel } from '~/store/actions/typeHotel.action';

const Home = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTypesHotel());
  //   dispatch(getConvenient());
  // }, [])

  return (
    <div>
      <DefaultLayout>
      </DefaultLayout>
    </div>
  )
}

export default Home
