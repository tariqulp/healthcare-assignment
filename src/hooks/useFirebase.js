import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const signInUsingEmailPassword = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signUpUsingEmailPassword = e => {
        // console.log(email, password)
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be at least 6 character long.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
        setIsLoading(true)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
        setIsLoading(false)
    }

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
            setIsLoading(false)

        });
    }, [])
    return {
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handlePassword,
        error,
        signInUsingEmailPassword,
        signUpUsingEmailPassword
    }
}

export default useFirebase;