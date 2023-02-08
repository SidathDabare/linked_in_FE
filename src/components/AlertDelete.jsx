import {Alert,Button} from 'react-bootstrap'

function AlertDismissible({setCloseAlert, showAlert}) {
   
  
    return (
      <>
        <Alert show={showAlert} variant="success">
          <p>
           You have succesfully deleted this post!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setCloseAlert(false)} variant="outline-success">
            &#10005;
            </Button>
          </div>
        </Alert>
  
        
      </>
    );
  }
  
 export default AlertDismissible