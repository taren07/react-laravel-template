import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import { UserUriEnum } from '../consts/UserUriConst'
import { RouteMappingType } from '../types/commonTypes'

//ログイン
const UserLogin = lazy(() => import('../Pages/User/Login'))

//NOT FOUND
// const NotFound = lazy(() => import('../Pages/User/Login'))

const UserAuthRoute = lazy(() => import('./UserAuthRoute'))

// パス コンポーネント 認証の有無 のマッピング
const RouteMapping: RouteMappingType[] = [

    // ログイン
    { path: UserUriEnum.Login, element: <UserLogin />, auth: true },

    // NOTFOUND
    // { path: `${UserUriEnum.NotFound}`, element: <NotFound />, auth: true },

]

const UserRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                {RouteMapping.map((route, key) => (
                    <Route key={key.toString()} path={route.path}
                        element={route.auth ?
                            <UserAuthRoute path={route.path}>
                                {route.element}
                            </UserAuthRoute>
                            :
                            route.element}
                    />

                ))}
            </Routes>
        </>
    )
}

export default UserRoutes
