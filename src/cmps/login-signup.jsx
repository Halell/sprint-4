// import { useState, useEffect } from 'react'
// // import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { loadUser, onLogout, onSignup, onLogin, onLogin, removeUser, loadUsers } from '../store/action/user.actions'
// import { ImgUploader } from '../cmps/img-uploader'

// export function LoginSignup(props) {
//     const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
//     const [isSignup, setIsSignup] = useState(false)
//     const [users, setUsers] = useState([])
//     const dispatch = useDispatch()
//     let { user } = useSelector((storeState) => storeState.userModule)

//     useEffect(async () => {
//         dispatch(loadUser())
//         // const users = await userService.getUsers()
//         console.log(user)
//         // setUsers(users)
//     }, [])

//     const clearState = () => {
//         setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
//         setIsSignup(false)
//     }

//     const handleChange = ev => {
//         const field = ev.target.name
//         const value = ev.target.value
//         setCredentials({ ...credentials, [field]: value })
//     }

//     const onLogin = (ev = null) => {
//         if (ev) ev.preventDefault()
//         if (!credentials.username) return
//         props.onLogin(credentials)
//         clearState()
//     }

//     const onSignup = (ev = null) => {
//         if (ev) ev.preventDefault()
//         if (!credentials.username || !credentials.password || !credentials.fullname) return
//         props.onSignup(credentials)
//         clearState()
//     }

//     const toggleSignup = () => {
//         setIsSignup(!isSignup)
//     }
//     const onUploaded = (imgUrl) => {
//         setCredentials({ ...credentials, imgUrl })
//     }

//     return (
//         <div className="login-page">
//             <p>
//                 <button className="btn-link" onClick={ toggleSignup }>{ !isSignup ? 'Signup' : 'Login' }</button>
//             </p>
//             { !isSignup && <form className="login-form" onSubmit={ onLogin }>
//                 <select
//                     name="username"
//                     value={ credentials.username }
//                     onChange={ handleChange }
//                 >
//                     <option value="">Select User</option>
//                     { users.map(user => <option key={ user._id } value={ user.username }>{ user.fullname }</option>) }
//                 </select>
//                 {/* <input
//                         type="text"
//                         name="username"
//                         value={username}
//                         placeholder="Username"
//                         onChange={this.handleChange}
//                         required
//                         autoFocus
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         placeholder="Password"
//                         onChange={this.handleChange}
//                         required
//                     /> */}
//                 <button>Login!</button>
//             </form> }
//             <div className="signup-section">
//                 { isSignup && <form className="signup-form" onSubmit={ onSignup }>
//                     <input
//                         type="text"
//                         name="fullname"
//                         value={ credentials.fullname }
//                         placeholder="Fullname"
//                         onChange={ handleChange }
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="username"
//                         value={ credentials.username }
//                         placeholder="Username"
//                         onChange={ handleChange }
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         value={ credentials.password }
//                         placeholder="Password"
//                         onChange={ handleChange }
//                         required
//                     />
//                     <ImgUploader onUploaded={ onUploaded } />
//                     <button >Signup!</button>
//                 </form> }
//             </div>
//         </div>
//     )
// }