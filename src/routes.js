import { HomePage } from './pages/home-page'
import { MainApp } from './pages/main-app'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
export default [
    // {
    //     path: '/item/edit/:itemId?',
    //     element: <ItemEdit />
    // },
    // {
    //     path: '/item/:itemId',
    //     element: <ItemDetails />
    // },
    {
        path: '/board/:id',
        element: <MainApp />,
    },
    {
        path: '/board/',
        element: <MainApp />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <HomePage />,
    },

]
