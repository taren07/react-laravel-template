import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { UserUriEnum } from '../../consts/UserUriConst';
import { apiAuthLogin } from '../../api/User/apiAuth'


export const Login = React.memo(() => {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" })
    const [errMessage, setErrMessage] = useState("")

    //ログインボタン押下時の処理
    async function loginHandler() {
        setErrMessage("")
        try {
            const result = await apiAuthLogin(values)
        } catch (error) {
            setErrMessage("ログインに失敗しました")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">ログイン</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                パスワード
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                placeholder="********"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-gray-700 font-bold">
                                    ログイン状態を維持する
                                </label>
                            </div>
                            <Link to="/" className="text-gray-700 font-bold hover:underline">
                                パスワードを忘れた場合
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
                        >
                            ログインする
                        </button>
                    </form>
                </div>
            </div>
            {/* <Footer optionClass={"sticky bottom-0 "} /> */}
        </>
    );
});

export default Login;
