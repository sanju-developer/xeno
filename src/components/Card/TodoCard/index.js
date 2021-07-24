import React from 'react';
import { Card, InputGroup, Dropdown } from 'react-bootstrap';

import { getParseTime, getDateBasedText, getColor } from '../../../utils/helperFunction'
import './index.scss'

function TodoCard(props) {
    const { todos, markCompleteHandler, dropdownHandler, selectedItem } = props
    return (
        <Card>
            <Card.Header as="h5" className="mb-4">To Do</Card.Header>
            {todos.map((item, i) => <Card.Body key={`todo` + i} className="d-flex justify-content-between">
                <div className="d-flex">
                    <div className="left-portion">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50" fill="#A4A7AB"><path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                        <InputGroup>
                            <InputGroup.Radio aria-label="complete task" checked={selectedItem === i} name={`todo` + i} onChange={(e) => markCompleteHandler(e, i)} />
                        </InputGroup>
                    </div>
                    <div className="right-portion">
                        <Card.Title className="card-heading">{item.name}</Card.Title>
                        <Card.Text className="card-description">
                            {item.description}
                            <div className="pt-3 d-flex align-items-center">
                                <div className={`dot ${getColor(item.date)}`} />
                                <span className="space-with-dot time">{getDateBasedText(item.date)} at {getParseTime(item.date)}</span>
                            </div>
                        </Card.Text>
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Edit
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id="Delete" onClick={(e) => dropdownHandler(e, i)}>Delete</Dropdown.Item>
                        <Dropdown.Item id="Duplicate" onClick={(e) => dropdownHandler(e, i)}>Duplicate</Dropdown.Item>
                        <Dropdown.Item disabled>Add reminder</Dropdown.Item>
                        <Dropdown.Item disabled>Add comment</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>)}
        </Card>
    );
}

export default TodoCard;