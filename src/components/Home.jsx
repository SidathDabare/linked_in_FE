
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'
import Experiance from './Experiance'
const Home = () => {
    return (
        <>
            <Container fluid style={{ backgroundColor: "#F3F2EF", height: "100vh" }} className='px-0'>
                <Navbar />
                <Experiance />
            </Container>
        </>
    )
}

export default Home