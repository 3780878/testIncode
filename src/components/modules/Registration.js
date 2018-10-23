import React from "react";

export default function Registration (){
  return (
  <div className="page">
  <h1>Registration</h1>
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="button" className="btn btn-primary">Submit</button>
    </form>
  </div>
)

}