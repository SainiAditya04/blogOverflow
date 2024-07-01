import { useContext, useEffect } from "react";
import Blogs from "./Blogs";
import Header from "./Header";
import { AppContext } from "./context/AppContext";
import Pagination from "./Pagination";

const App = () => {

  const { getBlogPosts } = useContext(AppContext);

  useEffect(() => {
    getBlogPosts();
  }, [ ]);

  return(
    <>
      <Header/>
      <Blogs/>
      <Pagination/>
    </>
  )
};

export default  App;