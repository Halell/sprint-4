import { HomePage } from './pages/home-page'
import { MainApp } from './pages/main-app'
import { LoginSignup } from './cmps/login-signup'

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
        element: <LoginSignup />,
    },
    {
        path: '/',
        element: <HomePage />,
    },

]
