import Home from "../pages/admin/home"
import Login from "../pages/admin/login/Login"
import Test from "../pages/admin/test/test"

const publicRoutes = [
    { path: '/login', component: Login},
]

const privateRoutes = [
    { path: '/home', component: Home},
    { path: '/test', component: Test},
]

export {publicRoutes,privateRoutes}
