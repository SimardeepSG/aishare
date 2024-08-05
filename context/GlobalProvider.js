import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";
import { Flag } from "react-native-appwrite";

const GlobalContext = createContext();
//declaring the context
export const useGlobalContext = () => useContext(GlobalContext);
//exporting const with a new hook we will create which is basically a callback function that cals the use context hook which then specified which context we want to get and in this case that is the GlobalContext;

//but someone or somehting has to provide this context
const GlobalProvider = ({ children }) => {
    //this is equal to a react compoenet that gets children as a prop and it returns the following 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)



    //so what this is basically doing is that it is if wehave logged in before it will gvie us access to the current user and then we can use it within our onboarding to figure out whether we should automatically redirect the user to the home page
    //-> on boarding would be the index.js of our app see changes there

    useEffect(() => {
        //it will only happen at the start, the dependency array is empty
        // using a function we will create in the appwrite file 
        getCurrentUser()
            //because this is an async function we can call .then on it to check for a response
            .then((res) => {
                if (res) {
                    //if a response exist then 
                    setIsLoggedIn(true);
                    setUser(res)
                    //set user equal to the response
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                //catch it if anything goes wrong and console log that error
                console.log(error)
            })
            //finally function meaning no matter if we succeed or fail then we do this 
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    // because the above function gets the current user we set it to the state and now we want to provide our entire application with the valie of that statewith information like  .... see below values

    return (
        < GlobalContext.Provider

            // which values to provide to proivder

            value={{
                // what values we want our entire app to have acess to 
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading

            }}>
            {children}
        </GlobalContext.Provider >
    )
}

//for this provider to do its purpose it need to wrap each an every individual screen of our application -> best was to do that is use ti within the main layout file 


export default GlobalProvider