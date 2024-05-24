import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // console.log(name, email, age);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const addUser = {name, email, age}
        console.log(addUser)
        const response = await fetch("http://localhost:5000/", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(addUser)

        })
        const result = await response.json();
        if (!response.ok){
            setError(result.error)
        }
        if (response.ok){
            setName("");
            setEmail("");
            setAge(0);
            navigate("/all");
        }

    }

    return (
        <div class="container mt-5">
            {error && <div class="alert alert-danger">{error}</div>}
            <h1>Enter Data</h1>
            <div class="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label class="form-label">Enter Name</label>
                            <input type="text" class="form-control" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Enter Email Address</label>
                            <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Enter Age</label>
                            <input type="number" class="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Create
