import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([ ]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // call the API and fill the data
    async function getBlogPosts(page = 1){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
        }catch(error){
            console.log("Error while fetching the blog data!")
            console.log(error);
            setPage(1)
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        // but we really need this ?
        getBlogPosts(page);
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
        getBlogPosts,
        handlePageChange,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}