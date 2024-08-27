import { getAuth, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () =>{
const navigate = useNavigate();
const user = useSelector( store => store.user);


const handelSignout = () =>{
    signOut(auth)
    .then(() => {
        
      navigate("/")
      }).catch((error) => {
        navigate("/error")
      });
      
}
    return(
        
        <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44" src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" alt= "logo"/>   

       {
       user && (<div className="flex">
            <img className="w-12 h-10 my-5" alt="usericon" src={user?.photoURL}/>
        <button onClick={handelSignout} className="font-bold text-white">Sign out </button>
        
        </div>)
        }
      </div>
      
       
    )
}
export default Header;
