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
        path: '/board/:id',
        element: <MainApp />,
    },
    {
        path: '/board/',
        element: <MainApp />,
    },
    {
        path: '/',
        element: <HomePage />,
    },

]
