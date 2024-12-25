import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//Step 1 for creating context  
export const AppContext = createContext();


//som the children for the below function would be App.js
//for more reference we have to refer to index.js file  
export default function AppContextProvider({children}) {
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(null);

    //data filling  

    async function fetchBlogPosts(page = 1) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("Error in Fetching Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    //used to change next and previous state of page 
    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    //step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}