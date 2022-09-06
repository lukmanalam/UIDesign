import React from "react"

export default function Content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div style={{ border: '1px solid #5379c1', padding: '10px', color: '#5379c1', textDecorationLine: 'underline', textAlign: 'center' }}>
                            Unit Mapped <br /> 2/725
                        </div>
                        <div style={{ border: '1px solid #5379c1', padding: '10px', color: '#5379c1', textDecorationLine: 'underline', textAlign: 'center' }}>
                            Active Charges <br /> 7/7
                        </div>
                        <div style={{ border: '1px solid #5379c1', padding: '10px', color: '#5379c1', textDecorationLine: 'underline', textAlign: 'center' }}>
                            Reading <br /> -/2
                        </div>
                    </div>
                    <div className="main-form">

                        <div class="row" style={{ marginTop: '20px' }}>
                            <div class="col">
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <label style={{ textAlign: 'left', fontWeight: 'bold' }} for="exampleFormControlInput1" class="form-label">Billing Cycle</label>
                                    <div>
                                        <i class="bi bi-pencil-square" style={{marginRight: '10px', color: '#56afe3'}}></i>
                                        <i class="bi bi-plus-circle-fill" style={{color: '#5379c1'}}></i>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div id="passwordHelpBlock" class="form-text" style={{ color: 'green', fontWeight: 'bold' }}>
                                    Billing cycle is active <i class="bi bi-check-square-fill"></i>
                                </div>
                            </div>
                            <div class="col">
                                <label style={{ textAlign: 'left', fontWeight: 'bold' }} for="exampleFormControlInput1" class="form-label">Cluster</label>
                                <div class="input-group">
                                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button class="btn btn-outline-secondary" type="button">X</button>
                                </div>
                            </div>
                        </div>

                        <div class="row" style={{ marginTop: '20px' }}>
                            <div class="col-6" style={{ marginTop: '10px' }}>
                                <label style={{ textAlign: 'left', fontWeight: 'bold' }} for="exampleFormControlInput1" class="form-label">Tower</label>
                                <div class="input-group">
                                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button class="btn btn-outline-secondary" type="button">X</button>
                                </div>
                            </div>
                            <div class="col-6" style={{ marginTop: '10px' }}>
                                <label style={{ textAlign: 'left', fontWeight: 'bold' }} for="exampleFormControlInput1" class="form-label">Unit</label>
                                <div class="input-group">
                                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button class="btn btn-outline-secondary" type="button">X</button>
                                </div>
                            </div>

                            <div class="col-6" style={{ marginTop: '10px' }}>
                                <input type="text" class="form-control" placeholder="Remarks" aria-label="Remarks" />
                            </div>
                        </div>
                        <div class="form-check" style={{ marginTop: '10px' }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault" style={{ fontWeight: 'bold' }}>
                                Provisional Bill <i class="bi bi-question-circle"></i>
                            </label>
                        </div>

                    </div>

                    <div class="btn-group" role="group" aria-label="Basic mixed styles example" style={{ marginTop: '30px' }}>
                        <button style={{ backgroundColor: '#d5755f', width: '200px' }} type="button" class="btn btn-danger"><i class="bi bi-file-break"></i> Generate</button>
                        <button style={{ backgroundColor: '#5379c1' }} type="button" class="btn btn-primary"><i class="bi bi-eye"></i> Preview</button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-file-earmark-excel"></i></button>
                        <button style={{ backgroundColor: '#5379c1' }} type="button" class="btn btn-primary"><i class="bi bi-printer"></i> Print</button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-file-earmark-excel"></i></button>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header" style={{ color: '#5379c1', textAlign: 'center' }}>
                            Billing Cycle
                        </div>
                        <div className="card-body" style={{ fontSize: '14px' }}>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-7" style={{ fontWeight: 'bold' }}>
                                            Billing period FROM | TO
                                        </div>
                                        <div class="col-5">
                                            01 Nov 2021 | 30 Nov 2021
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-7" style={{ fontWeight: 'bold' }}>
                                            Bill due date
                                        </div>
                                        <div class="col-5">
                                            01 Nov 2021 | 30 Nov 2021
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-7" style={{ fontWeight: 'bold' }}>
                                            Consider Payment To
                                        </div>
                                        <div class="col-5">
                                            30 Nov 2021
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-7" style={{ fontWeight: 'bold' }}>
                                            Consider meter reading FROM | TO
                                        </div>
                                        <div class="col-5">
                                            01 Nov 2021 | 30 Nov 2021
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div class="btn-group" role="group" aria-label="Basic mixed styles example" style={{ marginTop: '30px' }}>
                        <button style={{ backgroundColor: '#5379c1' }} type="button" class="btn btn-primary"><i class="bi bi-envelope"></i></button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-eye"></i></button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-printer"></i></button>
                        <button style={{ backgroundColor: '#5379c1' }} type="button" class="btn btn-primary"><i class="bi bi-phone"></i> SMS</button>
                        <button type="button" class="btn btn-outline-primary"><i class="bi bi-eye"></i></button>
                    </div>
                </div>


            </div>
        </div>
    )
}