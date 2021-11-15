import{ useEffect, useState } from 'react';

const useArticles = () => {

    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        fetch("https://boiling-reef-11210.herokuapp.com/articles")
        .then(res=>res.json())
        .then(data=>setArticles(data))
    },[])
    return[articles,setArticles];
};

export default useArticles;
