import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
  signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className="absolute w-screen px-8 pt-6 bg-gradient-to-b from-black to-transparent">
        <img className="w-56" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo" />
        {user && <div className="absolute top-6 right-8 flex">
          <img className="w-10 rounded-md cursor-pointer" src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR0tVMTskvIJzW8TirWQnD3trSLTFrMfeVHJShxp5ZrGQNRNaUq2Z_7qykvuFfsTo_MvIcglg-HO4tfrnU7oc7VF0nnYK7w.png?r=b21"
          alt="profile" />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md font-bold mx-2" onClick={handleSignOut}>
              Sign Out</button>
        </div>}
    </div>
    
  )
}

export default Header