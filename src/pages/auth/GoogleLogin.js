import { useGoogleLogin } from '@react-oauth/google';


function GGlogin() {
    const GGlogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });

    return ( 
        <button onClick={() => GGlogin()}
                className=' outline-1 outline hover:bg-gray-300 w-48 py-2 rounded'
            >Sign in with Google 
        
        </button> );
}


export default GGlogin;