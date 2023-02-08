/** @format */

import React, { useState } from "react"
import { useEffect } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import { useDispatch } from "react-redux"
import {
  getSingletUserExpById,
  getUserExpById,
  loginUserDataActionWithThunk,
} from "../redux/actions"

const EditExperience = (props) => {
  //console.log(props)
  // let oneOfExp = useSelector(
  //   (state) => state.singleExperience.singleExperiences
  // )
  // console.log(oneOfExp)
  //const myProfile = useSelector((state) => state.myProfile.profileData)
  // const userId = useParams()._id
  // console.log(userId)
  const dispatch = useDispatch()
  const [singleExperience, setSingleExperience] = useState({})

  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [area, setArea] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)

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
      //console.log(data)
      setImageUrl(data.url)
    } catch (error) {
      console.log(error)
    }
  }
  const editExperiance = async () => {
    let url = `${process.env.REACT_APP_URL}/users/${props.user_id}/experiences/${props.singleexp._id}`
    try {
      let res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          role,
          company,
          area,
          startDate,
          endDate,
          description,
          imageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      let data = await res.json()
      if (data.ok) {
        setLoading(false)
        console.log(data)
        //setSingleExperience(data)
        dispatch(getUserExpById(props.user_id))
        dispatch(loginUserDataActionWithThunk(data))
      } else {
        setLoading(true)
      }

      //return data
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    editExperiance()
    dispatch(getSingletUserExpById(props.user_id, props.singleexp._id))

    props.onHide()
  }

  useEffect(() => {
    setSingleExperience(props.singleexp)
  }, [props, props.singleexp, loading, singleExperience])

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'>
        <Modal.Header className='d-flex'>
          <Modal.Title id='contained-modal-title-vcenter'>
            Edit Experiance
          </Modal.Title>
          <i
            className='bi bi-x-lg'
            onClick={() => {
              props.onHide()
              //props.singleexperience({})
              //setSingleExperience({})
            }}></i>
        </Modal.Header>
        {loading ? (
          <div className='d-flex justify-content-center py-4'>
            <Spinner animation='grow' />
          </div>
        ) : (
          <>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3 col-12 d-flex '>
                  <Form.Label className='col-4'>Role</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='text'
                    defaultValue={
                      singleExperience.role ? singleExperience.role : ""
                    }
                    onChange={(e) => setRole(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>Company</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='text'
                    placeholder='Company Name'
                    defaultValue={
                      singleExperience.company ? singleExperience.company : ""
                    }
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>Area</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='text'
                    placeholder='Name Of City-Country'
                    defaultValue={
                      singleExperience.area ? singleExperience.area : ""
                    }
                    onChange={(e) => setArea(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>start Date</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='date'
                    placeholder='Started-Date'
                    defaultValue={
                      singleExperience.startDate
                        ? singleExperience.startDate
                        : ""
                    }
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>End Date</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='date'
                    placeholder='Finish-Date'
                    defaultValue={
                      singleExperience.endDate ? singleExperience.endDate : ""
                    }
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>Description</Form.Label>
                  <Form.Control
                    className='col-8'
                    size='sm'
                    type='text'
                    placeholder='Desc'
                    defaultValue={
                      singleExperience.description
                        ? singleExperience.description
                        : ""
                    }
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>ImageUrl</Form.Label>
                  <Form.Control
                    className='col-8'
                    type='text'
                    size='sm'
                    defaultValue={
                      singleExperience.imageUrl ? singleExperience.imageUrl : ""
                    }
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-12 d-flex'>
                  <Form.Label className='col-4'>Add image</Form.Label>
                  <Form.Control
                    className='col-8'
                    type='file'
                    onChange={addImage}
                  />
                </Form.Group>

                <Button
                  type='submit'
                  variant='primary'
                  className='mb-3 col-8 btn-block mx-auto'
                  onClick={handleSubmit}>
                  Save
                </Button>
              </Form>
            </Modal.Body>
          </>
        )}

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default EditExperience
