import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  //on click of sign out button
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // toggle GPT search by dispatching action
    dispatch(toggleGPTSearch());
  };

  //get the selected language and update redux store
  const handleLanguageChange = (e) => {
    const { value: lang } = e.target;
    dispatch(changeLanguage(lang));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //dispatch an action
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); //navigate to browse page is user is signed in
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); //navigate to login page is user is signed out
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="absolute py-2 px-4 bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-44 object-fill" src={LOGO} alt="netflix-logo" />
        {user && (
          <div className="flex p-2 items-center text-white">
            {/* select box for languages , only visible is Show GPT is true*/}
            {showGPTSearch && (
              <select
                name=""
                id=""
                className="bg-gray-900 px-4 py-2 m-2 rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-6 m-2 bg-purple-800 rounded-lg mx-4"
              onClick={handleGptSearchClick}
            >
              {showGPTSearch ? "Homepage" : "GPT ⌕" }
            </button>
            <img
              className="w-10 h-10 rounded-md"
              src={user?.photoURL ? user?.photoURL : USER_AVATAR}
              alt="netflix-user-logo"
            />
            <button className="font-bold  p-1" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
