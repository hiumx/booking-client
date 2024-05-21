import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '~/layout/DefaultLayout'
import { getMyInfo } from '~/store/actions/user.action';

const Home = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyInfo());
    }, []);
  return (
    <div>
      <DefaultLayout>
        <div>Body</div>
      </DefaultLayout>
    </div>
  )
}

export default Home
