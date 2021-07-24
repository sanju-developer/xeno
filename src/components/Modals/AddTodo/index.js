import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function AddTodo(props) {
    const { show, onHide, todoForm, onChangeHandler, addTodoHandler } = props
    const [err, setError] = useState('')

    const submit = () => {
        for (var key in todoForm) {
            if (todoForm[key] !== null && todoForm[key] != "") {
                setError('')
            } else return setError('Please fill the form')
        }
        addTodoHandler()
    }
    return (
        <Modal show={show}>
            <Modal.Header className="my-primary justify-content-center text-white">
                <Modal.Title>Add To Do</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {err && <Alert className="text-center p-1" key={'danger'} variant={'danger'}>
                    {err}
                </Alert>}
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="font-bold">Enter To Do Name</Form.Label>
                        <Form.Control value={todoForm.name} onChange={onChangeHandler} type="text" placeholder="Weekend scrum!" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label className="font-bold">Description</Form.Label>
                        <Form.Control onChange={onChangeHandler} value={todoForm.description} as="textarea" placeholder="Description for JIRA tickets..." rows={3} />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <label className="font-bold">Date and Time</label>
                        <input min={new Date().toISOString().split(".")[0]} id={'date'} value={todoForm.date} onChange={onChangeHandler} type="datetime-local" />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="primary" onClick={submit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddTodo;