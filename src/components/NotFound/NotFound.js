import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
   
    return (
        <div className='notfound-text'>
            <h1>404 not found</h1>
            <h2>This page is outside of the Universe</h2>
            <Link to='/home'><FontAwesomeIcon icon={faRotateBack}></FontAwesomeIcon>Back to home page</Link>
        </div>
    );
};

export default NotFound;