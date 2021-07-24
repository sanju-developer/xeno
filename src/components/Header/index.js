import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar className="my-primary" >
                <Container>
                    <h2 className="text-white">Xeno</h2>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;