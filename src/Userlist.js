import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

const ListOfUser = () => {
    const [listOfUsers, setlistOfUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data);
            setlistOfUsers(res.data);
        });
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
            }}
        >
            {listOfUsers.map((x) => (
                <div>
                    <Card style={{ marginTop: "15px", width: "18rem" }}>
                        <Card.Header>{x.name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{x.username}</ListGroup.Item>
                            <ListGroup.Item>{x.email}</ListGroup.Item>
                            <ListGroup.Item>{x.phone}</ListGroup.Item>
                            <ListGroup.Item>{x.website}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ListOfUser;