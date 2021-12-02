import React, { useState } from "react";
import { Col, Container, Row, Stack, Button, Table } from "react-bootstrap";

const SimpleForm = () => {
    const [formdata, setFormdata] = useState({
        fname:"",
        lname:"",
        email:"",
        phonenumber:"",
        selectcountry:"",
        dob:"",
        hobbies_checkbox:[],
        gender_radio:"",
        imagefile:"",
        message:""
    });

    const inputchange = (e) => {
        // e.preventDefault();
        const {name, value} = e.target;
        if(name === "imagefile"){
            let file_reader = new FileReader();
            let file = e.target.files[0];

            file_reader.onload = () => {
                setFormdata((perValue) => {
                    return {
                        ...perValue,
                        imagefile : file_reader.result
                    }
                })
            };
            if(file){
                file_reader.readAsDataURL(file);
            }
        }
        if(name === 'hobbies_checkbox'){
            let hobbcheck = formdata.hobbies_checkbox;
            let index = hobbcheck.indexOf(value);
            
            if(e.target.checked === true){
                hobbcheck.push(value);
            }else if(e.target.checked === false){
                hobbcheck.splice(index, 1)
            }

        }else{
            setFormdata((perValue) => {
                return{
                    ...perValue,
                    [name]:value
                }
            })
        }
    }

    const [datalist, setDatalist] = useState([]);

    const formfillsubmit = (e) => {
        e.preventDefault();
        setDatalist((oldValue) => {
            return [...oldValue, formdata]
        });
        console.log(formdata);
        console.log(datalist);
    }
    const delbtn = (id) => {
        const delrow = datalist.filter((deldata, index) => {
            return index !== id;
        })
        setDatalist(delrow);
    }
    return(
        <>
            <div className="section-ptb40">
                <Container>
                    <div className="form-box">
                        <div className="heading-list-title">
                            <h4>Simple Form</h4>
                        </div>
                        <form onSubmit={formfillsubmit}>
                            <Row>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <input type="text" name="fname" id="fname" className="form-control" placeholder="First Name" value={formdata.fname} onChange={inputchange} />
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <input type="text" name="lname" id="lname" className="form-control" placeholder="Last Name" value={formdata.lname} onChange={inputchange} />
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Email Address" value={formdata.email} onChange={inputchange} />
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <input type="text" name="phonenumber" id="phonenumber" className="form-control" placeholder="Phone Number" value={formdata.phonenumber} onChange={inputchange} />
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <select name="selectcountry" className="form-control" value={formdata.selectcountry} onChange={inputchange}>
                                            <option value="">Select Country</option>
                                            <option value="australia">Australia</option>
                                            <option value="japan">japan</option>
                                            <option value="india">India</option>
                                            <option value="china">China</option>
                                            <option value="russian">Russia</option>
                                            <option value="south_korea">South Korean</option>
                                            <option value="afghanistan">Afghanistan</option>
                                            <option value="norway">Norway</option>
                                            <option value="oman">Oman</option>
                                            <option value="turkey">Turkey</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <input type="date" name="dob" id="dob" placeholder="DOB" className="form-control" value={formdata.dob} onChange={inputchange} />
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group hobbies">
                                        <label htmlFor="hobbies_checkbox" className="form-label d-block mb-2">Hobbies</label>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="hobbies_checkbox" value="hobbie1" onChange={inputchange} /> hobbies 1
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="hobbies_checkbox" value="hobbie2" onChange={inputchange} /> hobbies 2
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="hobbies_checkbox" value="hobbie3" onChange={inputchange} /> hobbies 3
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group gender">
                                        <label htmlFor="gender_radio" className="form-label d-block mb-2">Gender</label>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="gender_radio" id="male" value="male" onChange={inputchange} /> Male
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="gender_radio" id="female" value="female" onChange={inputchange} /> Female
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} xl={4}>
                                    <div className="form-group">
                                        <Stack direction="horizontal" gap={2}>
                                            <input type="file" name="imagefile" id="imagefile" className="form-control" onChange={inputchange} />
                                            <img src={formdata.imagefile} style={{height:"50px"}} alt="" />
                                        </Stack>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div className="form-group">
                                        <textarea type="text" name="message" id="message" className="form-control" rows={3} placeholder="Message" value={formdata.message} onChange={inputchange}></textarea>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div className="form-group">
                                        <Button variant="primary" type="submit">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Container>
            </div>
            <div className="section-ptb40">
                <Container>
                    <div className="table-part table-responsive">
                        <Table bordered size="sm">
                            <thead>
                                <tr>
                                    <th>#Id</th>
                                    <th>Image</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Email Address</th>
                                    <th>country</th>
                                    <th>DOB</th>
                                    <th>Hobbies</th>
                                    <th>Gender</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datalist.map((data, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={data.imagefile} className="img-fluid" alt="" style={{height:"50px"}} /></td>
                                            <td>{data.fname}</td>
                                            <td>{data.lname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phonenumber}</td>
                                            <td>{data.selectcountry}</td>
                                            <td>{data.dob}</td>
                                            <td style={{whiteSpace:"nowrap"}}>
                                                {
                                                    data.hobbies_checkbox.map((hchecklist, rel) => {
                                                        return <span className="badge badge-info mx-1" key={rel}>{hchecklist}</span>
                                                    })
                                                }
                                            </td>
                                            <td>{data.gender_radio}</td>
                                            <td>{data.message}</td>
                                            <td width="8%">
                                                <div className="d-inline-flex">
                                                    {/* <Button variant="info" size="sm" className="mx-1"><i class="ri-edit-2-fill"></i></Button> */}
                                                    <Button variant="danger" size="sm" className="mx-1" onClick={()=> delbtn(index)}><i class="ri-delete-bin-2-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SimpleForm;