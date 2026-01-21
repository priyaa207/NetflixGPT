import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../utils/userSlice';

const Body = () => {
  const dispatch=useDispatch();
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ]);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(setUser({uid,email,displayName}));
      } else {
        dispatch(clearUser());
      }
    });
    }, []);
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body