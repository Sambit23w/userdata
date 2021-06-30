import React from 'react';
import { Button, Card, Container, Row, Col, Table, Image, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pageone extends React.Component {

    constructor() {
        super();
        this.state = {
            listItem: [],
            rev: []
        }
    }

    componentDidMount() {
        this.getdata()
    }

    getdata() {
        fetch('https://reqres.in/api/users?page=1')
            .then((response) => response.json())
            .then(result => {
                this.setState({
                    listItem: result.data
                })

                console.log(this.state.listItem)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">User Data1</Navbar.Brand>
                </Navbar>
                <Container>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Profile picture</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        {this.state.listItem.map((item, i) => {
                            console.log(item)
                            return (
                                <>


                                    <tbody>
                                        <tr>
                                            <td> <Image src={item.avatar} rounded /></td>
                                            <td>{item.first_name}</td>
                                            <td> {item.last_name}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    </tbody>



                                </>
                            )
                        })}

                    </Table>
                </Container>
            </>
        )
    }
}

export default Pageone