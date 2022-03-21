import React, { useEffect, useState } from 'react';
import { Adduser } from './Adduser';
import { Users } from './Users';
function Home() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        fetchdata();
        setUpdate(false);
    }, [])
    const fetchdata = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => { setUsers(data); console.log(data); })
            .catch((err) => {
                console.log(err);
            })
    }
    const onAdd = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                "Content-type": "application/json; character=UTF-8",
            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setUsers([...users, data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const onDelete = async (id) => {
        await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status !== 200) {
                    return
                } else {
                    setUsers(users.filter((user) => {
                        return user.id !== id;
                    }))
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const onEditUser = async (id, name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                "Content-type": "application/json; character=UTF-8", "Accept": "application/json"
            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return res.json();
                } else {
                    alert(res.json());
                    return res.json();
                }
            })
            .then((data) => {
                users[id - 1] = data;
                setUsers([...users]);
                console.log(users[id - 1]);
                console.log(users);
            }
            )
            .catch((err) => {
                alert(err);
            })
    }
    return (
        <div>
            <h1>React CRUD App With Jsonplaceholder</h1>
            <Adduser onAdd={onAdd} setId={setId} setName={setName} setEmail={setEmail} id={users.id} key={users.id} onDelete={onDelete} name={name} email={email} onEditUser={onEditUser} users={users} update={update} setUpdate={setUpdate} />
        </div>
    )
}
export { Home };