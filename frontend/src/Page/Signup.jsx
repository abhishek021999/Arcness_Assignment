import React, { useState } from "react";
let userDataArray = [];
function Signup() {
  const [InputData,SetInputData]=useState({
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    conformpassword:""
  })
 console.log(InputData)
  function handleChange(e){
      const {name,value} = e.target
      SetInputData(prev=>({
        ...prev,[name]:value
      }))
  }


  function handleSubmit(e){
      e.preventDefault()
      if(InputData.firstName=="" && InputData.lastName=="" && InputData.username=="" && InputData.email=="" && InputData.password=="" && InputData.conformpassword==""){
        return alert("All fields are required")
      }
      if(InputData.password!=InputData.conformpassword){
        return alert("password miss match")
      }
      let newobj={
        firstName:InputData.firstName,
        lastName:InputData.lastName,
        username:InputData.username,
        email:InputData.email,
        password:InputData.password,
        
      }
      userDataArray.push(newobj)
      SetInputData({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        conformpassword:""
      })
      localStorage.setItem("userdata",JSON.stringify(userDataArray))
  }
  return (
    <div className=" w-[100%] m-auto bg-[url('https://s3-alpha-sig.figma.com/img/598b/e375/6c1c4a778dc678d9b5c27f1c8875582d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMcw1r2Q4XMUmPVN7BMkpYBcvW9a182joUhR7-ChMqYiRWhlRlGFW3lVR~Ovb8fIs0ir0IhPuB4WrosmDNpPF~duv6eF7UXt2TtR-NHQS7Tv26cVHuuCXexxnBXkNAG-G5dHUQoDyehGo1GV~ug-sX~uAcak0Y9qvIZAHodhYp4KdsF53sUfGqsnYJq3sMsyft0JAtTm3Zinjf8dCmglGCy1r~rRNtpdx8-o~TIP~EJ2ry2PELHv6w~Do3hX1e6PuuyqaI8Mry-r1tcwUrd4IeRrqsrUHeKp-DsAgZfH2oFaIlLUcIiCipwtySLzlNGkb9ZD~AfpciC4HjDoHdMFgg__')] bg-[red]">
      <div className="container flex gap-[100px] bg-slate-100 w-[80%] m-auto ">
        <div className="left mt-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/6d08/add4/e1ff0f0155d84c990839d2578e5bc3bb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imcP9IZBqz57yNU2yRXzoyoWH6XIc28kW9IchyQYolwQbFFRhS9Hv9kBjwabY2k3tSRhGmTEmYBdXW55RpwEJ4l2WtWkIccJNHh7t-kenFXUzCYMU6LCwjnZk9hgAsHyJvbOefBmIBIH4lq4NF1pBiEM475Tudo6UwBIcD-BHGIo-~1l-evx01ak10Ty627jrPOzxhHXAbxjD0p~U~vqzDZBZa1-yxq25hu2MpYWeSQ8y~uSgSSl1M7BE8q5AA9VKb6YKyk-nOG1k2unHcrB4kG1eQ8~Ogu2Qg2rifAFPBtWdjegS0ibmAKYj2eAfPO7TdFRezlJkOPznJ03ftYYOg__"
            alt=""
          />
        </div>
        <div className="right">
          <div className="right flex flex-wrap space-x-4 mt-5">
            <h1 className="w-full mb-4 text-xl font-bold ml-5">Sign Up</h1>
            <form
              action=""
              className="w-full flex flex-col  flex-wrap"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.firstName}
                name="firstName"
                onChange={handleChange}

              />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.lastName}
                name="lastName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.username}
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.email}
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.password}
                name="password"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full md:w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
                value={InputData.conformpassword}
                name="conformpassword"
                onChange={handleChange}
              />
              <div className="w-full flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <label>I agree to the terms and conditions</label>
              </div>
              <input
                type="submit"
                value="Register"
                className="w-1/3 bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 cursor-pointer"
              />
              <p className="w-full mt-4">
                Already have an account?{" "}
              
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
