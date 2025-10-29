/*import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import LoginPage from '../pages/LoginPage'

import CustomersList from '../pages/customers/CustomersList'
import CustomersForm from '../pages/customers/CustomersForm'

import CarsList from '../pages/cars/CarsList'
import CarsForm from '../pages/cars/CarsForm'

import UsersList from '../pages/users/UsersList'
import UsersForm from '../pages/users/UsersForm'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={ <Homepage /> } />
    <Route path="/login" element={ <LoginPage /> } />

    <Route path="/customers" element={ <CustomersList /> } />
    <Route path="/customers/new" element={ <CustomersForm /> } />
    <Route path="/customers/:id" element={ <CustomersForm /> } />

    <Route path="/cars" element={ <CarsList /> } />
    <Route path="/cars/new" element={ <CarsForm /> } />
    <Route path="/cars/:id" element={ <CarsForm /> } />

    <Route path="/users" element={ <UsersList /> } />
    <Route path="/users/new" element={ <UsersForm /> } />
    <Route path="/users/:id" element={ <UsersForm /> } />

  </Routes>
}*/

import { Routes, Route } from 'react-router-dom'


import AuthGuard from './AuthGuard'


import { routes, UserLevel } from './routes'


export default function AppRoutes() {
 return (
   <Routes>
     {
       routes.map(route => {
         let element
         if(route.userLevel > UserLevel.ANY) {
           element = <AuthGuard userLevel={route.userLevel}>
             {route.element}
           </AuthGuard>
         }
         else element = route.element
        
         return <Route
           key={route.route}
           path={route.route}
           element={element}
         />
       })
     }
   </Routes>
 )
}

