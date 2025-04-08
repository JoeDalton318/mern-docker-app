const Panier = () => {
  return (
    <section className="container content mx-5 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
                <h3 className="d-flex justify-content-between align-items-center mb-4 fw-normal mb-0">Shopping Cart</h3>
                <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">Basic T-shirt</p>
                            <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">$499.00</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body p-4 d-flex flex-row">
                        <div data-mdb-input-init className="form-outline flex-fill">
                        <input type="text" id="form1" className="form-control form-control-lg" />
                        <label className="form-label">Discound code</label>
                        </div>
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                    </div>
                </div>
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg card-body">Proceed to Pay</button>
            </div>
        </div>
    </section>
  )
}

export default Panier