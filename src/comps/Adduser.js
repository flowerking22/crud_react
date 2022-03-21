import React, { useState } from 'react';
import { Users } from './Users';
function Adduser({ onAdd, setName, update, setUpdate, setEmail, onDelete, name, email, onEditUser, setId, id, key, users, }) {
    // const [id, setId] = useState();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const onchangeName = (event) => {
        event.preventDefault();
        setName(event.target.name.value);
        console.log(name);
    }
    const onchangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        console.log(email, event.target.email.valu);
    }
    const But = () => {
        return (
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                {update ? ("update") : ("create user")}
            </button>
        )
    }
    const onsubmitUpdate = (event) => {
        event.preventDefault();
        onEditUser(event.target.id.value, event.target.name.value, event.target.email.value);
        setUpdate(false);
    }
    const onsubmitAdd = (event) => {
        event.preventDefault();
        onAdd(event.target.name.value, event.target.email.value);
    }

    return (
        <div>
            {/* <form onSubmit={onsubmit} className="form-inline" name="editform">
                <div className="form-group">
                     <input type="text" name="id" onChange={(e) => setId(e.target.value)} required className="btn btn-outline-dark" />
                    <select class="" id="exampleFormControlSelect1" name="id" onChange={(e) => setId(e.target.value)} required className="btn btn-outline-dark">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.vaalue)}
                        className="" required />
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="m-4" required />
                    <button type="submit" onSubmit={onsubmit} className="btn btn-outline-success">Update</button>
                </div>
            </form> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                {update ? ("Update User") : ("Create New User")}
            </button>
            <div class="modal fade bg-primary color-primary" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={update ? (onsubmitUpdate) : (onsubmitAdd)} name="adduser">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">{update ? ("Update Form") : ("New User Account Registarion")}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {update ? (
                                    <select class="" id="exampleFormControlSelect1" name="id" onChange={(e) => setId(e.target.value)} required className="btn btn-outline-dark">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                ) : (null)}
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.vaalue)} required />
                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="m-4" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {update ? (<button type="submit" data-bs-dismiss="modal" className="btn btn-outline-success" onSubmit={onsubmitUpdate}><i class="fas fa-edit"></i>Update</button>) : (<button type="submit" data-bs-dismiss="modal" className="btn btn-primary" onSubmit={onsubmitAdd}><i class="fas fa-user-plus"></i>Add User</button>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead className="">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>
                            <Users id={user.id} key={user.id} onDelete={onDelete} name={user.name} email={user.email} onEditUser={onEditUser} setName={setName} setEmail={setEmail} update={update} setUpdate={setUpdate} setId={setId} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export { Adduser };