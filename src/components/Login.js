import Header from './Header';
import {useState ,useRef} from "react"
import {checkValidData} from "../utils/validates"
 import {createUserWithEmailAndPassword } from "firebase/auth";
 import {auth} from "../utils/firebase";
 import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate } from "react-router-dom"
import { updateProfile } from "firebase/auth";

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)
  const [errorMessage, setErrorMessage] = useState("")
 const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

 const handelButtonClick = () => {
    //validate from form data
   
    //  console.log(email.current.value)
    //  console.log(password.current.value)
    const messafe = checkValidData(email.current.value,password.current.value)
    console.log(messafe)

    setErrorMessage(messafe)
    if(messafe)return;

    if(!isSignInForm){
        //sign up logic here
        createUserWithEmailAndPassword(auth,
            email.current.value,
            password.current.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
    updateProfile(user , {
        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/150316139?v=4"
      }).then(() => {
        // Profile updated!
        navigate("/browse")
      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.messafe)
      });
   
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ': ' + errorMessage)
    //A1B2C3@domain.org
    //A1B2C3@domain.org
  });

    }
    else{
        //sign in logic here

        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '/' + errorMessage )
        });
      
    }
}
    return (
        <div>
                     
    <Header/>
    <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg"
            alt="background"
            />
   </div>
   <from 
   onSubmit={(e) => e.preventDefault()}
   className="p-12 absolute  w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80" >

   <h1 className="font-bold text-3xl py-4">
   {isSignInForm ? "Sign In" : "Sign Up"} </h1>
   
   {!isSignInForm && (
        <input type="text" placeholder="Name" className="py-2 my-4 w-full bg-gray-700"/>
    )
        }
    <input ref={email} type="text" placeholder="Email" className="py-2 my-4 w-full bg-gray-700"/>
    
    <input ref={password} type="password" placeholder="Password" className="py-2 my-4 w-full bg-gray-700"/>
    
    <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
    
    
    <button type="submit" className="p-4 my-6 bg-red-700 w-full" onClick={handelButtonClick}>{isSignInForm ? "Sign In" : " Sign up "}</button>

    <p onClick={toggleSignInForm}>
    {isSignInForm ? "Don't have an account? Sign up" : "Allready registered Sign In Now"}</p>
   </from>
        </div>

    
    );
}
export default Login;