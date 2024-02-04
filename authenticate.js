import React from 'react'
import Tailredv1 from '../public/Tailredv1.svg'
import Image from 'next/image'
import { AiFillGoogleCircle } from "react-icons/ai"
import {signInWithGoogle, auth, actionCodeSettings} from "../firebase"
import { sendSignInLinkToEmail } from 'firebase/auth'
import { useState } from 'react'




function signIn() {

  //Email input setup
  const [email, setEmail] = useState('')
  //function to get email value
  const inputEmail = (event) =>{
    setEmail(event.target.value)
  }
  const verification = async () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      // ...
    });
  
  }

    return (
      <div className='grid w-full h-screen bg-no-repeat bg-cover place-items-center bg-auth-image'>
        
        {/* Logo */}
        <div className='fixed top-0 left-0 right-0 w-40 h-40 mt-5 ml-8 cursor-pointer'>
            <Image src={Tailredv1}/>
        </div>

        {/* Main Box */}
        <div className='flex flex-col items-center sm:w-[28.125rem] sm:h-[27rem] sm:pb-0 w-full h-screen px-10 bg-[#1B1B1B] sm:rounded-[3.438rem] place-content-center pb-80'>

            {/* Title */}
            <div className='text-center'>
                <h1 className="text-3xl font-bold text-white">Welcome!</h1>
                <p className="-mt-1 text-lg font-bold mb-7 text-[#909090]">Let's get your session started!</p>
            </div>


            {/* Email Input */}
            <div className='flex flex-col items-start w-full mb-4'>
                <p className='mb-1 text-[#909090] font-bold'>EMAIL FOR VERIFICATION</p>
                <input onChange={inputEmail} type='text' className='p-1 h-9 min-w-full bg-[#000000] rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F31046]'/>
            </div>

            {/* Pink Button */}
            <div onClick={verification} className='flex mb-3 items-center place-content-center w-full h-[4rem] bg-[#F31046] rounded-lg hover:bg-[#ea0f42] transition-all duration-200 cursor-pointer'>
                <p className='font-bold text-white'>Send Code</p>
            </div>
            
            {/* Break Line */}
            <div className="w-full my-3 border-t-2 border-white"/>

            {/* Google Auth Button */}
            <div onClick={signInWithGoogle} className='flex items-center mt-3 mb-2 w-full h-[4rem] p-3 font-bold text-white bg-[#005DFF] rounded-lg place-content-center hover:bg-[#0158ef]'>
                <AiFillGoogleCircle className='w-8 h-8 mr-3 text-white'/>
                <p>Sign in with Google</p>
            </div>
        
        </div>

        <div className='fixed bottom-0 left-[85%] right-0 mb-5 mr-8 cursor-pointer'>
            <p className='text-white'>Art: Milad Fakurian 🤍</p>
        </div>

      </div>
    )
  }


export default signIn