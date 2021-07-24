import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

import './index.scss'

function Searchbar(props) {
    const { isRounded, onSearchHandler } = props
    return (
        <Form className="d-flex searchbar">
            <FormControl
                type="Search"
                placeholder="Search To Do"
                className={`mr-2 ${isRounded ? 'round-search' : ''}`}
                aria-label="Search"
                onChange={onSearchHandler}
            />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg> */}
        </Form>
    );
}

export default Searchbar;