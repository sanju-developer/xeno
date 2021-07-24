import React from 'react';
import { Card } from 'react-bootstrap';

import './index.scss'
import { getDateWithSuffix } from '../../../utils/helperFunction';

function CompletedCard(props) {
    const { todos } = props
    return (
        <Card>
            <Card.Header as="h5" className="mb-4">Completed</Card.Header>
            {todos.map((cd, ind) => <Card.Body key={`com-todo-${ind}`} className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="left-portion">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50" fill="#A4A7AB"><path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                    </div>
                    <div className="right-portion d-flex">
                        <span className="pr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#1C52BF"><path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg></span>
                        <Card.Title className="strikethrough">{cd.name}</Card.Title>
                        <div className="dot dark-grey mt-2" />
                        <span className="space-with-dot">Task finished on {getDateWithSuffix(cd.date)}</span>
                    </div>
                </div>
            </Card.Body>)}
        </Card>
    );
}

export default CompletedCard;