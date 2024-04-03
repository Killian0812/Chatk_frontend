import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Tippy from "@tippyjs/react";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_?]).{6,24}$/;

function PasswordTooltip({ status, hasText }) {
    return `Password must contain 6 to 24 characters, must include uppercase and lowercase letters ,
     a number, a special character ${hasText === "" ? "" : (status ? '✅' : '❌')}`
}
function PasswordCfTooltip({ status, hasText }) {
    return `Make sure your confirm password matches the one entered above ${hasText === "" ? "" : (status ? '✅' : '❌')}`
}

function Recover() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    const [user, setUser] = useState(null);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [cfPassword, setCfPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [hasError, setHasError] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // const [tokenVerified, setTokenVerified] = useState(true);

    useEffect(() => {
        axios.post('/api/auth/verify', { token }).then(res => {
            setUser(res.data);
            // console.log(res.data);
        }).catch(err => {
            navigate('/404', { replace: true });
        })
    }, [navigate, token]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === cfPassword);
    }, [password, cfPassword])

    const handleSubmit = async () => {
        // console.log(password, cfPassword);
        if (!validPwd) {
            setHasError(true);
            setMessage("Not a valid password")
            return;
        }
        else if (!validMatch) {
            setHasError(true);
            setMessage("Confirm password doesn't match")
            return;
        }

        // if all validation passed
        try {
            await axios.post('/api/auth/recover', { username: user.username, password });
            setHasError(false);
            setMessage('Recovery successful. Please proceed to login');
            setCfPassword("");
            setPassword("");
            setSuccess(true);
        } catch (error) {
            setHasError(true);
            setMessage('Internal Server Error')
        }
        setLoading(false);
    };

    return (
        <div className="h-screen w-screen flex bg-white">
            {/* left theme */}
            <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 flex-auto">

            </div>
            {/* right theme */}
            <div className="h-full w-1/2 flex items-center justify-center">
                {/* Box */}
                <div className="rounded-lg max-w-[340px] py-5 px-5 border-2 border-gray-300 shadow-xl flex flex-col " >

                    {/* Icon */}
                    <svg width={60} fill="rgba(19 123 205)" className="h-16 flex m-1 ml-5 mt-3" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg>

                    {
                        user && (<><span className="text-gray-600 mt-3">Reset password</span>
                            <div className="border-2 flex justify-between items-center px-5 py-3 rounded-md bg-slate-50">
                                <div className="w-[100px] flex-[0.3] justify-center flex">
                                    <img src={user.image} className="rounded-full w-12 h-12" alt=""></img>
                                </div>
                                <div className="flex-[1] text-left px-5">
                                    <p className="font-bold text-base text-black truncate max-w-[200px]">{user.username}</p>
                                    <p className="text-sm text-black truncate max-w-[230px]">{user.email}</p>
                                </div>
                            </div>
                        </>)
                    }

                    {/* Form */}
                    <div className="mt-2" >
                        {/* Input */}
                        <div className="mt-3 relative">
                            <label htmlFor="password" className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs  " > Password </label>
                            <Tippy
                                hideOnClick="false"
                                placement="left"
                                trigger="focus"
                                content={<PasswordTooltip status={validPwd} hasText={password} />}>
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Tippy>
                        </div>

                        <div className="mt-[70px] relative">
                            <label htmlFor="cfPassword" className="absolute px-1 font-semibold bg-white left-3 z-20 text-blue-600 text-xs" > Confirm Password </label>
                            <Tippy
                                hideOnClick="false"
                                placement="left"
                                trigger="focus"
                                content={<PasswordCfTooltip status={validMatch} hasText={cfPassword} />}>
                                <input
                                    type="password"
                                    id="cfPassword"
                                    autoComplete="off"
                                    className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full bg-white text-gray-900 border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700"
                                    value={cfPassword}
                                    onChange={(e) => setCfPassword(e.target.value)} />
                            </Tippy>
                        </div>

                        {/* Submit */}
                        <div className="mt-[140px] flex justify-end mr-5">

                            <span className={`flex-1 max-w-[200px] pl-0 pr-1 ${hasError ? 'text-red-600' : 'text-green-600'}`}>{message}</span>

                            <button
                                onClick={() => {
                                    setLoading(true);
                                    handleSubmit();
                                }}
                                disabled={loading || !validMatch || !validPwd}
                                className=" w-20 h-10 bg-blue-500 text-white font-semibold rounded-md 
                                        hover:bg-blue-600 duration-300 flex justify-center items-center
                                        disabled:bg-slate-500 disabled:hover:cursor-not-allowed"
                            >
                                {
                                    loading ? <img src="/loading.png" className="w-9 h-9" alt=""></img> :
                                        "Submit"
                                }
                            </button>
                        </div>

                    </div>

                    {/* Login */}
                    <div className="border-t-2 pt-4 mt-4 px-3 flex items-center">
                        <div className="text-md text-gray-500 font-normal">
                            {success ? 'Got the password?' : 'Remember it now?'}
                        </div>

                        <Link to="/login">
                            <button
                                type="submit"
                                className={`w-20 h-10 ml-2  text-white font-semibold rounded-md  duration-300
                                ${success ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600"}`}>
                                Login
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default Recover;