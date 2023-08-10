import { createBrowserRouter, Outlet } from 'react-router-dom'
import LayoutComponent from '../components/Layout/LayoutComponent'
import { Contact } from './Contact'
import Error404 from './Error404'
import { Home } from './Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutComponent>
        <Outlet />
      </LayoutComponent>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
])

export default router
