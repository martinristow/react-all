import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Search = () => {
    return (
        <>
            <Form>
                <Container className="p-5">
                    <Form.Group className="mb-1" controlId="formBasicTerm">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" placeholder="Movie Title"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Container>

            </Form>

        </>
    )
}
export default Search
