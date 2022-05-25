import { HomePage } from './pages/HomePage'
import { App } from './pages/app.jsx'

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
        element: <App />,
    },

]
