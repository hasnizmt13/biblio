import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {

    
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className='mt-24 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg'>
        <form className='space-y-6 flex flex-col justify-center items-center h-full w-full' action="" method="post">
            <br />
          <h1 className='text-4xl px-5 py-1 text-white pb-5'>Créer un compte</h1>
          <input className='w-2/3 p-2 rounded-full' type="text" name="nom" id="nom" placeholder="Votre nom"/>
          <input className='w-2/3 p-2 rounded-full' type="text" name="prenom" id="prenom" placeholder="Votre prenom"/>
          <input className=' hidden w-2/3 p-2 rounded-full' type="text" name="role" id="role" value="lecteur"/>
          <input className='w-2/3 p-2 rounded-full' type="email" name="email" id="email" placeholder="Email"/>
          <div className='relative w-2/3'>
            <input className='w-full p-2 rounded-full' 
                   type={showPassword ? "text" : "password"} 
                   name='password' 
                   id='password' 
                   placeholder="Password"/>
            <button type="button" onClick={togglePasswordVisibility} 
                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>   
          <div className='relative w-2/3'>
            <input className='w-full p-2 rounded-full' 
                   type={showConfirmPassword ? "text" : "password"} 
                   name='confirmpassword' 
                   id='confirmpassword' 
                   placeholder="Confirm Password"/>
            <button type="button" onClick={togglePasswordVisibility2} 
                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>   
          <button className='my-10 w-1/5 p-2 font-bold rounded-full text-darkBlue bg-white hover:text-green-500' type="submit">Sign Up</button>
          <div className='flex flex-row justify-center space-x-5'>
            <p className='text-white'>Vous avez déja un compte ? </p> 
            <a className='text-white font-bold' href="/signin"> Se connecter</a>
          </div>
          
          <br /><br />
          
        </form>    
      </div>
    </>
  )
}

export default SignUp;
