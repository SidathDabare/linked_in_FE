/** @format */

import { useEffect, useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { loginUserDataActionWithThunk } from "../redux/actions"
import "../style/EditProfile.css"

export default function EditProfile(props) {
  const myProfile = useSelector((state) => state.logUser.loginData)

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [title, setTitle] = useState("")
  const [area, setArea] = useState("")
  const [image, setImage] = useState("")
  const [username, setUsername] = useState("")

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const addImage = async (e) => {
    const str = e.target.files[0]
    let url = `${process.env.REACT_APP_URL}/files/cloudinary`
    var formData = new FormData()
    formData.append("image", str)
    var requestOptions = {
      method: "POST",
      body: formData,
    }
    try {
      let res = await fetch(url, requestOptions)
      let data = await res.json()
      console.log(data)
      setImage(data.url)
    } catch (error) {
      console.log(error)
    }
  }
  const editUser = async () => {
    let url = `${process.env.REACT_APP_URL}/users/${myProfile._id}`
    try {
      let res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          name,
          surname,
          email,
          bio,
          title,
          area,
          image,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      let data = await res.json()
      console.log(data)
      dispatch(loginUserDataActionWithThunk(data))

      return data
    } catch (error) {
      console.log(error)
    }
  }
  const deleteUser = async (e) => {
    e.preventDefault()
    console.log("USER DELETED")
    // let url = `${process.env.REACT_APP_URL}/users/${myProfile._id}`
    // try {
    //   let res = await fetch(url, {
    //     method: "DELETE",
    //   })
    //   let data = await res.json()
    //   dispatch(loginUserDataActionWithThunk(data))
    //   return data
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editUser()
    handleClose()
    props.onHide()
    // navigate("/signin")
  }
  useEffect(() => {
    console.log(image)
  }, [image])

  return (
    <Modal
      {...props}
      aria-labelledby='contained-modal-title-vcenter modal-container'>
      <Modal.Header className='d-flex'>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span> Edit Details </span>
        </Modal.Title>
        <i className='bi bi-x-lg' onClick={props.onHide}></i>
      </Modal.Header>
      <Modal.Body className='modal-container-content'>
        <Form>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>First name*</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your name'
              defaultValue={myProfile.name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Last name*</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your surname'
              defaultValue={myProfile.surname}
              onChange={(e) => setSurname(e.target.value)}
              autoFocus
            />
          </Form.Group>
          {/* <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Last name*</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your username'
              defaultValue={myProfile .username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </Form.Group> */}
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Username</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your username'
              defaultValue={myProfile.username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            controlId='formBasicPassword'
            className='mb-3 col-12 d-flex'>
            <Form.Label className='col-4'>Email address</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='email'
              placeholder='Enter your email'
              defaultValue={myProfile.email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Title</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your job title'
              defaultValue={myProfile.title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Bio</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your bio'
              defaultValue={myProfile.bio}
              onChange={(e) => setBio(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Area</Form.Label>
            <Form.Control
              className='col-8'
              size='sm'
              type='text'
              placeholder='Enter your bio'
              defaultValue={myProfile.area}
              onChange={(e) => setArea(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Image</Form.Label>
            <Form.Control
              className='col-8'
              type='text'
              size='sm'
              defaultValue={image}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 col-12 d-flex'
            controlId='exampleForm.ControlInput1'>
            <Form.Label className='col-4'>Add image</Form.Label>
            <Form.Control className='col-8' type='file' onChange={addImage} />
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            onClick={handleSubmit}
            className='mb-3 btn btn-block col-8 mx-auto'>
            Save
          </Button>
          <Button
            //disabled
            type='submit'
            variant='danger'
            onClick={deleteUser}
            className='mb-3 btn btn-block col-8 mx-auto'>
            Delete User
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}
