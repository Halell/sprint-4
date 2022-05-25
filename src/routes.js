import { HomePage } from './pages/home-page'
import { MainApp } from './pages/main-app'

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
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/',
        element: <MainApp />,
    },

]
