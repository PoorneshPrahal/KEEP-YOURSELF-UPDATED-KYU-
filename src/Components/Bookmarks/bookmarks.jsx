import React, { useEffect, useState } from 'react'
import {firestore} from '../../firebase'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import profilePic from "../../images/avatar.jpg";
import coins from "../../images/coins.png";
import Sidebar from '../Sidebar/Sidebar';
import NewsCard from '../News/newsCard';
import CardSkeleton from '../News/CardSkeleton';
import "../News/news.css";

function Bookmarks() {
    // State variable to obtain bookmarked articles
    const [articles, setArticles] = useState([]);

    // State variable to display loading skeleton while loading
    const [isLoading, SetIsLoading] = useState(true);

    // Obtaining username and id from local storage
    const userId = localStorage.getItem("userId");
    const name = localStorage.getItem("userName");

    //useEffect to load bookmarked articles from firebase 

    useEffect(()=>{
      showBookmarks();
      
    },[])

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    // Function to obtain bookmarked articles from firebase
    const showBookmarks = async()=>{

        try {
            const val = doc(firestore, "Bookmarks", "8CEou27AnNUuJ9hQfrZO");
            const collectionval = collection(val, userId);
            const querySnapshot = await getDocs(collectionval);
            const bookmarksData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            // Saving ontained JSON data in Article useState
            setArticles(bookmarksData);
            SetIsLoading(false)
            console.log(bookmarksData)
            
          } catch (error) {
            // Error handling 
            console.error('Error fetching comments:', error);
        
          }

    }

  return (
    

<div style={{ display: "flex" }}>
       <Sidebar />
       
      <div >
      <div class="d-flex justify-content-between">
  <div class="p-2 navbarTitle" style={{marginTop : "auto",marginBottom : "auto", marginLeft : "2%"}}>Bookmarks</div>
  <div class="d-flex">
    <div class="p-2 d-flex" style={{marginTop : "auto",marginBottom : "auto"}}>
    <img src={coins} alt="" />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{getRndInteger(100,1000)}</p>
    </div>
    <div class="p-2 d-flex"  >
    <img src={profilePic} alt="" height={40} width={40} style={{borderRadius : "100px"}} />
      <p style={{marginTop : "auto",marginBottom : "auto"}} >{name}</p>
    </div>
  </div>
</div>
        <div className="container ">
         

          <div className="row">
            {articles.map((article, index) => {
              // Use NewsCard component to rendet the bookmarked articles
              return <NewsCard article={article} key={article.id} />;
            })}

            {/* Loading skeletion to be displayed while the site is loading */}
            {isLoading && <CardSkeleton cards={6} />}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Bookmarks