import React from 'react';
export default function Navbar() {
    return (
        <nav className="navbar-expand-sm navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold ml-4" href="#">CRUD App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/flowerking30" target="blank">Onwer Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/developed">Developed by</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/depensics">Dependesics</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <a href="https://facebook.com/r.king.188" className="btn btn btn-primary ms-2 rounded-avator" target="blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/poovarasan-r-82379a222/" className=" btn btn-primary ms-2">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/+919150371784" className="btn btn btn-success ms-2 rounded-avator" target="blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="mailto:rpoovarasan479@gmail.com" className="btn btn-danger rounded avator ms-2">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://github.com/flowerking30?tab=repositories" className="btn btn btn-dark ms-2" target="blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}