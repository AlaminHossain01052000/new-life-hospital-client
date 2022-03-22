import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    const [total, setTotal] = useState(0);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerNewUser = (name, email, password, navigate) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { displayName: name, email: email };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Set User Display Name

                }).catch((error) => {
                    // An error occurred At the time of setting user displayName

                });

                fetch("https://newlife-hospital-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                setLoading(false)

                navigate('/');
            })
            .catch((error) => {


                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const loginUser = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                setError("");
                const redirect_url = location?.state?.from || "/";
                navigate.push(redirect_url);
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const googleLogIn = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError("");
                const newUser = { displayName: result.user.displayName, email: result.user.email };
                setUser(newUser);
                fetch("https://newlife-hospital-server.vercel.app/users", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()

                const redirect_url = location?.state?.from || "/";
                navigate(redirect_url);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setLoading(false))
            ;
    }

    useEffect(() => {

        fetch(`https://newlife-hospital-server.vercel.app/users/admin?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)

            })
    }, [user.email])

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                // When User is signed out

                setUser({})
            }
            setLoading(false);
        });
    }, [auth])
    //==============================


    return {
        user,
        admin,
        registerNewUser,
        googleLogIn,
        logoutUser,
        loginUser,
        loading,
        total,
        setTotal,
        error,
        token
    }
}
export default useFirebase;