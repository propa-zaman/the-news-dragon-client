import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login with</h4>
            <div className='d-flex flex-column'><Button variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>{' '}
                <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>{' '}</div>

            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;