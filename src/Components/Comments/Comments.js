import React, { useEffect, useState } from 'react'
import {firestore} from '../../firebase'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaUserCircle } from 'react-icons/fa';
import close from '../../images/closeButton.png';
import { Link } from "react-router-dom";
import pft from "../../images/logo.jpg";
import { useLocation } from "react-router-dom";


const Comments = (props)=> {

  const [isOpen, setIsOpen] = useState(false);

  // Obtain article id using UseLocation hooks
  const location = useLocation();
  const article = location.state;
  const id = article.article_id
  
  console.log(article.article_id)
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
       
      //  State variables for storing comments from database 
        const [comment, setComment] = useState('');
        const [subcollectionName, setSubcollectionName] = useState('');
        const [coms,setcoms] = useState([]);
        const [l,setl] = useState(false);

        // UseEffect to obtian previous comments
        useEffect(()=>{
            getComments()
            
        },[])
        
        // Functions to handle opening and closing of popup
        const closePopup = () => {
          setIsOpen(false);
        };

        const openPopup = () => {
          setIsOpen(false);
        };
        

        // Function to get comments for a particular article from firebase
        const getComments = async () => {
            try {
              const val = doc(firestore, "Comments", "VssfnEMhepJFOcPb2ENn");
              const collectionval = collection(val,id);
              const querySnapshot = await getDocs(collectionval);
              const commentsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
              setcoms(commentsData);
              console.log(coms)
              setl(false);
            } catch (error) {
              console.error('Error fetching comments:', error);
              setl(false);
            }
          };
        
        // Function Add new comments to the article 
        const addCommentToSubcollection = async () => {
          try {
            const name = localStorage.getItem("userName");
            console.log(name)
           const val = doc(firestore,"Comments","VssfnEMhepJFOcPb2ENn")
           const collectionval = collection(val,id)
          await  addDoc(collectionval,{name:name,comment:comment})
            console.log('Subcomment added successfully!');
          } catch (error) {
            console.error('Error adding subcomment: ', error);
          }
          setComment('')
          getComments()
        }
  return (
    <div >
     
    <div className="modal">
      
    <Link to='/main'>
     <img src={close}  alt=""  className='close-btn' onClick={closePopup}/>

     </Link>
    
        <div className='modal-main container'>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <img src={article.image_url||pft} width='40' height='300'/>
              </div>
             
              <div className='row'>
                <h5>{article.title}</h5>
              </div>
            </div>
            <div className='col side'>
              <div className='row r-2'>
              {l ? (
        <p>Loading...</p>
      ) : (
        <div className='lis'>
          {coms.map((e) => (
            <div className='box'>
              <FaUserCircle className='icon'/>
            <h6>{e.name} : </h6>
            <h6 key={e.id}>{e.comment}</h6>
          </div>
          ))}
        </div>
      )}   
              </div>
              <div className='row r-1'>
                {/* Input tag to obtain the comment to be inserted to the article */}
              <input
              className='inpt-c'
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        
      />
       </div>
      
             {/* Button to add new Comments to the article */}
       <a className='btn-c' onClick={addCommentToSubcollection} style={{textDecoration:'none'}}>Post </a>

     
            </div>

          </div>
        
        </div>
      
    </div>
    
    </div>
  )

}
export default Comments