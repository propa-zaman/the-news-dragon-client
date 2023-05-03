import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import Footer from '../Pages/Shared/Footer/Footer';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>

            </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;