import React from "react"
import { Link, useHistory } from 'react-router-dom';

const Eheader =()=>{
    return(
        <>
{/* <!-- Main Navigation --> */}
<header>

  {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-md navbar-light navbar-transparent fixed-top scrolling-navbar">
    <div className="container-fluid">

      {/* <!-- Brand --> */}
      <a className="navbar-brand" href="https://mdbecommerce.com/">
        <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
      </a>

      {/* <!-- Collapse button --> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <!-- Breadcrumbs --> */}
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a className="waves-effect" href="#!">Home</a></li>
            <li className="breadcrumb-item"><a className="waves-effect" href="#!">Templates</a></li>
            <li className="breadcrumb-item active"><a className="waves-effect" href="#!">E-commerce</a></li>
        </ol>
      {/* <!-- Breadcrumbs --> */}
      {/* <!-- Links --> */}
      <div className="collapse navbar-collapse" id="basicExampleNav">

        {/* <!-- Right --> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#!" className="nav-link navbar-link-2 waves-effect">
              <span className="badge badge-pill red">1</span>
              <i className="fas fa-shopping-cart pl-0"></i>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true">
              <i className="india flag m-0"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#!">Action</a>
              <a className="dropdown-item" href="#!">Another action</a>
              <a className="dropdown-item" href="#!">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect">
            <Link to="/Registration">Registration</Link>
            </a>
          </li>
          <li className="nav-item pl-2 mb-2 mb-md-0">
            <a type="button"
              className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"><Link to="/Login">Sign
              up</Link></a>
          </li>
        </ul>

      </div>
      {/* <!-- Links --> */}
    </div>
  </nav>
  {/* <!-- Navbar --> */}

  <div className="jumbotron jumbotron-image color-grey-light" style={{"height":"200Px"}}>

    {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/clothes(3)-crop.jpg" alt="First slide"/>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/clothes(4)-crop.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(4).jpg" alt="Third slide"/>
            </div>
        </div>
    </div> */}


    <div className="mask rgba-black-strong d-flex align-items-center h-100">
      <div className="container text-center white-text py-5">
        <h1 className="mb-3">Shop Custom Page</h1>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa
          porta molestie.</p>
      </div>
    </div>
  </div>

</header>
{/* <!-- Main Navigation --> */}
        </>
    )
}
export default Eheader