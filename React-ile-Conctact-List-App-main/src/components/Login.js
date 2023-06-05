// import React ,{useEffect, useState}from 'react'
// import '../App.css';
// import {auth,provider} from "./Config";
// import {signInWithPopup} from "firebase/auth";
// import Contacts from './Contacts';

// const Login = () => {
//     const [value,setValue] = useState('')
//     const handleClick = () => {
//         signInWithPopup(auth,provider).then((data)=>{
//             setValue(data.user.email)
//             localStorage.setItem("email",data.user.email)
//         })
//     }
//     useEffect(() => {
//         setValue(localStorage.getItem('email'))
//     })
//   return (
//     <div className='login'>
//         <div className='logincontent'>
//        <div className='d1'>
//          Sign In
//       </div>
//       <div className='d2'>
//         Sign in to your account
//       </div>
//       <div className='btns'>
//         {value?<Contacts/>:
        
//         <button className='btn1' onClick={handleClick}><img className='google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"/>Sign in with Google</button>
// }
//         <button className='btn2'><img className ="apple" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"/> <span className='spanapple'>Sign in with Apple</span></button>
//       </div>
//       <div className='main1'>
//         <form>
//         <div >
//             <label className='email'>Email address</label>
//             <br/>
//             <input type="text" placeholder='xyz@gmail.com' className='input1'/>
            
//         </div>
//         <div className='pass'>
//             <label className='password'>Password</label>
//             <br/>
//             <input type='password' placeholder='enter your password' className='input2'/>

//         </div>
//         <div className='fpass'>
//             <p>Forgot password?</p>
//         </div>
//         <div className='btn3'>
//             <p className='btn3p'>Sign In</p>

//         </div>
//         </form>
//       </div>
//       <div className='forRegister'>
//         Don't have an account? <span className='spanR'>Register here</span>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Login



import React, { useEffect, useState } from 'react';
import '../App.css';
import { auth, provider } from './Config';
import { signInWithPopup } from 'firebase/auth';
import Contacts from './Contacts';

const Login = () => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      // Open Contacts component in a new tab
      
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className='login'>
      <div className='logincontent'>
        <div className='d1'>Sign In</div>
        <div className='d2'>Sign in to your account</div>
        <div className='btns'>
          {
            value ? <Contacts/> :
            <button className='btn1' onClick={handleClick}>
              <img
                className='google'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'
                alt='Google Logo'
              />
              Sign in with Google
            </button>
}
          <button className='btn2'>
            <img
              className='apple'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png'
              alt='Apple Logo'
            />{' '}
            <span className='spanapple'>Sign in with Apple</span>
          </button>
        </div>
        <div className='main1'>
          <form>
            <div>
              <label className='email'>Email address</label>
              <br />
              <input type='text' placeholder='xyz@gmail.com' className='input1' />
            </div>
            <div className='pass'>
              <label className='password'>Password</label>
              <br />
              <input type='password' placeholder='enter your password' className='input2' />
            </div>
            <div className='fpass'>
              <p>Forgot password?</p>
            </div>
            <div className='btn3'>
              <p className='btn3p'>Sign In</p>
            </div>
          </form>
        </div>
        <div className='forRegister'>
          Don't have an account? <span className='spanR'>Register here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

