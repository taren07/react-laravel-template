import React from 'react';
import { RouteProps } from 'react-router-dom'
// import { useUserAuth } from '../CustomHooks/UserAuth'


const UserAuthRoute: React.FC<RouteProps> = ({ children, ...props }): JSX.Element => {

    // 認証確認
    // const user = useUserAuth()

    return (
        <>
            {/* {user.isLogedIn ? */}
            <>
                {children}
            </>
            {/* :
                <></> */}
            {/* } */}
        </>
    )

};

export default UserAuthRoute;
