import React from 'react';
const Users = ({ id, name, email, onDelete, onEditUser, setName, setEmail, update, setUpdate, setId }) => {
    const onDel = () => {
        var option = window.confirm('Are You Sure Want to Delete :-' + name)
        if (option) {
            onDelete(id);
        }
    }
    const onEdit = (event) => {
        event.preventDefault();
        setUpdate(true);
        setName(name);
        setEmail(email);
        setId(id);
        id = id;
        // onEditUser(id, name, email);
    };
    const handleonchangeNa = (e) => {
        setName(e.target.value);
    }
    const handleonchangeEm = (e) => {
        setEmail(e.target.value);
    }
    const handleonchangeId = (e) => {
        setId(e.target.value);
    }
    return (
        <tr>
            <td className="btn text-dark">{id}</td>
            <td><input type="text" name="name" value={name} onChange={(e) => name = e.target.value} className="btn bg-warning" /></td>
            <td><input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="btn bg-info" /></td>
            <td><button onClick={onEdit} className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-edit"></i>edit</button></td>
            <td><button onClick={onDel} className="btn btn-outline-danger"><i class="fas fa-user-slash"></i>delete</button></td>
        </tr>
    )
}
export { Users };