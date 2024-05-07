import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Utils/AuthContext.jsx';
import Commons from './Commons.jsx';

function Profile() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const { user} = useAuth();

    if (!user) {
        return <p>Please log in to see this page.</p>;
    }
  
  return (
    <>
    <div className='pt-14 flex min-h-screen '>

        <div className='p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between'>

         <Commons/>

        </div>

        <div className=' w-full flex items-start mt-10 justify-center'>
        <div className='bg-gray-100 flex flex-col w-full h-full'>
            <img className="w-40 h-40 mx-auto ml-12 my-10 align-center  rounded-full" src="src\assets\profile.jpg" alt="Photo de profile"/>
            <input className='w-1/3 mx-auto  disabled border-2 rounded-md border-black mt-2 p-3 text-xl text-darkBlue' value={user.nom}/>
            <input className='w-1/3 mx-auto  disabled border-2 rounded-md border-black mt-2 p-3 text-xl text-darkBlue' value={user.prénom}/>
            <input className='w-1/3 mx-auto  disabled border-2 rounded-md border-black mt-2 p-3 text-xl text-darkBlue' value={user.email}/>
            <div className='relative w-full'>
                <input className='w-1/3 mx-auto disabled border-2 rounded-md border-black mt-2 p-3 text-xl text-darkBlue' 
                    type={showPassword ? "text" : "password"} 
                    name='password' 
                    id='password' 
                    placeholder="Password"
                    value={user.password_}/>
                <button type="button" onClick={togglePasswordVisibility} 
                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            </div>
        </div>
        </div>
       
    </div>
    </>
  )
    
    
}

 {/* <h1>{user.id}</h1>
        <p>Nkhame: {user.nom}</p>
        <p>Email: {user.email}</p>
        <button onClick={signOut}>Sign Out</button> */}
export default Profile