import React, { useEffect, useState } from 'react'
import {firestore} from '../../firebase'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import pft from './sample1.jpeg'
import { FaUserCircle } from 'react-icons/fa';


function Comments(props) {

  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
        const [name, setName] = useState('shilbha');
        const [comment, setComment] = useState('');
        const [subcollectionName, setSubcollectionName] = useState('');
        const [coms,setcoms] = useState([]);
        const [l,setl] = useState(false);

console.log(props.show)
        useEffect(()=>{
            // getComments()
            
        },[])

        const getComments = async () => {
            try {
              const val = doc(firestore, "Comments", "VssfnEMhepJFOcPb2ENn");
              const collectionval = collection(val, "news1");
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
      
        const addCommentToSubcollection = async () => {
          try {
           const val = doc(firestore,"Comments","VssfnEMhepJFOcPb2ENn")
           const collectionval = collection(val,"news1")
          await  addDoc(collectionval,{name:name,comment:comment})
            console.log('Subcomment added successfully!');
          } catch (error) {
            console.error('Error adding subcomment: ', error);
          }
          setComment('')
          getComments()
        }
  return (
    <div>
     
    <div className="modal">
        <div className='modal-main container'>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <img src={pft} width='60' height='300'/>
              </div>
             
              <div className='row'>
                <h5>Israel military releases satellite images showing Hamas' war crimes</h5>
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
              <input
              className='inpt-c'
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className='btn-c' onClick={addCommentToSubcollection}>Add Comment </button>
      <button onClick={props.handleClick} className='close'>Close</button>
              </div>
           
     
            </div>
     
          </div>
        
        </div>
      
    </div>
    </div>
  )

}
export default Comments