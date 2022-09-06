export default function Navbar() {
    return (
        <nav style={{marginBottom: '10px', borderTop: '5px solid #517bc3'}} className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color: '#5379c1'}}><i class="bi bi-arrow-left-circle-fill"  style={{color: '#5379c1'}}></i> Back</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{backgroundColor: '#5379c1', color: 'white'}} aria-current="page" href="#">B2C</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color: '#5379c1'}} href="#">B2B Tax</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color: '#5379c1'}} href="#">B2B Supply</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{color: '#5379c1'}} href="#">Manual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-plus-circle-fill"  style={{color: '#5379c1'}}></i></a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link"  style={{color: '#5379c1'}} href="#">Bill Documentation</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}