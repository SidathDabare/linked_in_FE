import {Modal,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux"
import {createPostActionWithThunk} from '../redux/actions/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,
  faEarthAmericas,
  faFileLines,
  faSuitcase,
  faAward,
  faChartSimple,
  faEllipsis,
  faImage,
  faCommentDots, 
  faPlayCircle} from '@fortawesome/free-solid-svg-icons';
  import {useEffect, useState} from 'react'
import { useRef } from 'react';


 const samplePost = {
  text:"", image:"",username:"",userId:""
 }


const ModalPost =({handleClose,createPost,profile}) => {

  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.logUser.loginData)
  

  const [post, setPost]= useState(samplePost)
  const [image,setImage] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(()=>{
    if(post.text.length >= 3){
      setIsDisabled(false)
    }
    else if(post.text.length < 3){
      setIsDisabled(true)
    }
  
  },[post])

  useEffect(()=> {
    setPost({...post, username:loggedUser.name, userId: loggedUser._id})

  },[])

    return (
      
        <Modal show={createPost} onHide={handleClose}>
          <Modal.Header >
            <div className='d-flex align-items-center justify-content-between'>
            <h5>Create Post</h5>
            <div onClick={handleClose} className='d-flex align-items-center justify-content-center modal-header-dark-button-container'>
              <svg 
               xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
            </div>
            </div>
            
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex'>
                <img src={profile.image} alt='' className='modal-body-profile-img'/>
                <div className='d-flex flex-column ml-2 mb-4'>
                    <p>{profile.name}&nbsp;{profile.surname}</p>
                    <button className='modal-body-anyone-button' type='button'><FontAwesomeIcon icon={faEarthAmericas}/>
                    Anoyone 
                    <FontAwesomeIcon icon={faCaretDown}/></button>
                </div>
                </div>
                <div>
                  <textarea
                  onChange={(e)=>{
                      setPost({...post, text:e.target.value});
                  }}
                  value={post.text}
                   className='modal-body-textarea'
                     cols="30"
                      rows="5"
                       placeholder='What do you want to talk about?'>
                        </textarea>
                </div>
                <button className='modal-body-addhashtag-button'>Add hashtag</button>
          </Modal.Body>
          <Modal.Footer>
            <div className='d-flex align-items-center justify-content-between flex-grow-1'>
             <div className='modal-footer-file-input-container'>
             <input type="file" name="file" id="file" className="inputfile" onChange={(e)=> setImage(e.target.files[0])}/>
             
              <label className='mb-0' htmlFor="file"><FontAwesomeIcon icon={faImage}/></label>
              
             
             </div>
             <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faPlayCircle}/>
             </div>
             <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faFileLines}/>
             </div>
             <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faSuitcase}/>
             </div>
             <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faAward}/>
             </div>
             <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faChartSimple}/>
             </div>
              <div className='modal-footer-dark-button-container'>
             <FontAwesomeIcon icon={faEllipsis}/>
             </div>
            </div>
           <div className='d-flex border-left-secondary justify-content-between'>
            <Button className='modal-footer-anyone-button ml-2'>
             <FontAwesomeIcon icon={faCommentDots}/> Anyone
            </Button>
              <Button className='modal-footer-post-button'
              disabled={isDisabled}
               variant="primary" onClick={()=>{ dispatch(createPostActionWithThunk(post,image)); handleClose(); setImage(null); setPost(samplePost) }}>
                Post
              </Button>
           </div>
          </Modal.Footer>
        </Modal>
     
    );
  }

  export default ModalPost