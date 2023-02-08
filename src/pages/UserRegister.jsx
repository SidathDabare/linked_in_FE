/** @format */

import React, { useEffect } from "react"
import { useState } from "react"
import "../style/SignPage.css"
import { Row, Container, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import axios from "axios"

const UserRegister = () => {
  const user = useLocation()
  const navigate = useNavigate()
  //console.log(user.state)
  const [name, setName] = useState("Sidath")
  const [surname, setSurname] = useState("Dabare")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("Junior Developer")
  const [title, setTitle] = useState("Junior Developer")
  const [area, setArea] = useState("Padova")
  const [image, setImage] = useState("")
  const [username, setUsername] = useState("Sidath22")

  const addNewUser = async () => {
    let url = `${process.env.REACT_APP_URL}/users`
    // let imagePath = await addImage(imageUrl)
    // console.log(imagePath)

    try {
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
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

      return data
    } catch (error) {
      console.log(error)
    }
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewUser()
    navigate("/signin")
  }
  useEffect(() => {
    //console.log(user.state)
    setEmail(user.state.email)
    setPassword(user.state.password)
  }, [])
  return (
    <Container className='col-11 mt-4 signIn-logo-container'>
      <Row>
        <img
          className='signIn-logo'
          src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png'
          alt='signIn-logo'
        />
      </Row>
      <Row className='col-12'>
        <Col className='col-11 col-xs-12 col-md-12 col-lg-8  mt-3 mx-auto rounded signin-div'>
          <div className='mt-2'>
            <h3 className='text-center'>Please insert your details..</h3>
          </div>
          <Form className='mt-4 col-12 mx-auto'>
            <div className='d-flex'>
              <div className='col-6'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label className='my-0'>Email </Form.Label>
                  <Form.Control
                    size='sm'
                    type='email'
                    placeholder={email}
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Name</Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Username</Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Bio </Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Bio'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Image Url </Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Image Url'
                    defaultValue={image}
                    //onChange={(e) => setImageUrl(e.target.files[0])}
                  />
                </Form.Group>
              </div>
              <div className='col-6'>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label className='my-0'>Password</Form.Label>
                  <Form.Control
                    size='sm'
                    type='password'
                    placeholder={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Surname </Form.Label>
                  <Form.Control
                    size='sm'
                    type='email'
                    placeholder='Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </Form.Group>{" "}
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Title</Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Area</Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Area'
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label className='my-0'>Image</Form.Label>
                  <Form.Control
                    className='py-0'
                    size='sm'
                    type='file'
                    onChange={addImage}
                  />
                </Form.Group>
              </div>
            </div>

            <p
              className='text-center'
              style={{ lineHeight: "14px", fontSize: "12px" }}>
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <Link to='/'>User Agreement,</Link>
              <Link to='/'> Privacy Policy,</Link> and{" "}
              <Link to='/'>Cookie Policy.</Link>
            </p>
            <div className='col-9 mx-auto'>
              <Button
                variant='primary'
                type='submit'
                className='btn btn-block rounded-pill py-2'
                onClick={handleSubmit}>
                Agree & Join
              </Button>

              <Button
                type='submit'
                className='btn btn-block rounded-pill py-2 mt-3 bg-transparent text-dark'>
                <span>
                  <i className='bi bi-google'></i>
                </span>
                <span> Continue with Google</span>
              </Button>

              <p className='text-center mt-4'>
                Already on LinkedIn?<Link to='/signin'> Sign In</Link>
              </p>
              <p className='text-center mt-4' style={{ fontSize: "14px" }}>
                Looking to create a page for a business?
                <Link to='/signin'> Get help</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className='signin-footer col-10 mx-auto px-0'>
        <div className='col-7 d-flex justify-content-around'>
          <p>
            <img
              className='footer-signIn-logo'
              src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png'
              alt='signIn-logo'
            />
            &#169; 2022
          </p>
          <p>
            <Link to='/'>Accessibility</Link>
          </p>
          <p>
            <Link to='/'>Privacy Policy</Link>
          </p>
          <p>
            <Link to='/'>Copyright Policy</Link>
          </p>
          <p>
            <Link to='/'>Guest Controls</Link>
          </p>
          <p>
            <Link to='/'>
              Language
              <span>
                <i className='bi bi-chevron-compact-down'></i>
              </span>
            </Link>
          </p>
        </div>
        <div className='col-5 d-flex justify-content-around'>
          <p>
            <Link to='/'>About</Link>
          </p>
          <p>
            <Link to='/'>User Agreement</Link>
          </p>
          <p>
            <Link to='/'>Cookie Policy</Link>
          </p>
          <p>
            <Link to='/'>Brand Policy</Link>
          </p>
          <p>
            <Link to='/'>Community Guidelines</Link>
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default UserRegister
