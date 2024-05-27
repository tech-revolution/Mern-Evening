import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Read = () => {

  const [data, setData] = useState();
  const [error, setError] = useState("");
  async function getData() {
    const response = await fetch("http://localhost:5000/");
    const result = await response.json();
    console.log(result)
    if (!response.ok) {
      setError(result.error)
    }
    if (response.ok) {
      setData(result);
      setError("");
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}
            <h1>All Data</h1>
      <div className="row">
        {data?.map((ele)=>(
          <div key={ele._id} className="col-md-4">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title text-start p-2">Name : {ele.name}</h5>
              <h6 className="card-subtitle mb-2 p-2 text-start text-body-secondary">Email : {ele.email}</h6>
              <p className="card-text p-2 text-start">Age : {ele.age}</p>
              <Link className="btn btn-outline-primary mx-3">Edit</Link>
              <Link className="btn btn-outline-danger mx-3">Delete</Link>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Read
