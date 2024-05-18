import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import axios from "axios";

const EMAIL_REGEX = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;

function Forgot() {
    const [email, setEmail] = useState('');

    const [validEmail, setValidEmail] = useState(false);

    const [loading, setLoading] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    const handleSubmit = async () => {
        if (!validEmail) {
            setMessage("Not a valid email address");
            setError(true);
            return;
        }
        try {
            await axios.post('/api/auth/forgot', { email });
            setError(false);
            setMessage("We've sent a recovery link. Check your email")
            setEmail('');
        } catch (error) {
            setError(true);
            if (!error?.response) {
                setMessage('No Server Response');
            } else if (error.response?.status === 409) {
                setMessage(error.response?.data);
            } else {
                setMessage('Internal Server Error');
            }
        }
        setLoading(false);
    };

    return (
        <div className="h-screen w-screen flex bg-[var(--login-right-bg)]">
            {/* left theme */}
            <div className="h-full w-1/2 bg-gradient-to-r from-[--login-start-gradient] to-[--login-end-gradient] flex-auto">

            </div>
            {/* right theme */}
            <div className="h-full w-1/2 flex items-center justify-center">
                {/* Box */}
                <div className="w-80 h-70 rounded-lg border-2 border-[var(--login-border-color)] 
                shadow-xl flex flex-col bg-[var(--login-form-container)]" >

                    {/* Icon */}
                    <svg width={60} fill="rgba(19 123 205)" className="h-16 flex m-1 ml-5 mt-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path className="" d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg>

                    {/* Title */}
                    <div className="mt-1 text-sm w-[100%] text-[var(--login-text-color)] px-5">
                        In order to recover your account, please
                        enter the email address you provided in the
                        registration process.
                    </div>

                    {/* Form */}
                    <div className="mt-2" >
                        {/* Input */}
                        <div className="ml-5 mr-5 relative">
                            <label htmlFor="email" className="absolute px-1 font-semibold bg-[var(--login-form-container)]
                            left-3 z-20 text-blue-600 text-xs  " > Email ID </label>
                            <Tippy
                                hideOnClick="false"
                                placement="left"
                                trigger="focus"
                                content={`Must be a valid email address ${email === "" ? "" : (validEmail ? '✅' : '❌')}`} >
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="off"
                                    className="outline-0 absolute top-2 z-10 rounded-sm py-1.5 pl-3 w-full 
                                    bg-[var(--login-form-container)] text-[var(--login-input-text-color)] 
                                    border-2 border-gray-300 duration-300 hover:border-cyan-600 focus:border-blue-700" />
                            </Tippy>
                        </div>

                        {/* Submit */}
                        <div className="mt-14 mx-5 mb-6 flex justify-between ">
                            <span className={`${error ? 'text-red-600' : 'text-blue-600'} max-w-[200px]`}>{message}</span>
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    handleSubmit();
                                }}
                                disabled={!validEmail || loading}
                                className=" w-16 h-10 bg-blue-500 text-white font-semibold rounded-md
                            hover:bg-blue-600 flex justify-center items-center
                            disabled:hover:cursor-not-allowed disabled:bg-slate-500"
                            >
                                {loading ? <img src="/loading.png" className="w-7 h-7" alt=""></img> : "Submit"}
                            </button>
                        </div>
                    </div>

                    <hr className="w-[90%] self-center border-gray-300" />

                    {/* Register */}
                    <div className="pt-4 mt-1 mb-3 px-3 flex items-center">
                        <div className=" text-md text-gray-500 font-normal">
                            Back to login?
                        </div>


                        <Link to="/login">
                            <button
                                className=" w-20 h-10 ml-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 duration-300"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Forgot;