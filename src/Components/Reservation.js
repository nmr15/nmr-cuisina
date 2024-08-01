import { useState} from "react"
import { useForm } from "react-hook-form"
import { time } from "../time"

const Reservation = () => 
{
  const [reserve, setReserve] = useState({
    location: "",
    email: "",
    people: "",
    date: "",
    time: ""
  })

  const [errorMsg, setErrorMsg] = useState({
    location: "",
    email: "",
    people: "",
    date: "",
    time: ""
  })

  const reserveInfo = (e) =>
  {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
    console.log(reserve);
  }

  const
  {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) =>
  {
    console.log(data);
  }

  console.log(errors);

  return (
  <>
    <div className="bg-reserve">
      <div className="container reserve-container d-flex justify-content-center">
        <div className="reserve">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                
              {/* <label htmlFor="location" className="form-label">Location</label> */}
                <select name="location" className="form-select reserve-form" onChange={(e) => reserveInfo(e)}>
                <option>Select Location</option>
                <option value="Pomona">Pomona</option>
                <option value="Chino">Chino</option>
                <option value="Glendora">Glendora</option>
                <option value="Rancho Cucamonga">Rancho Cucamonga</option>
              </select>
            </div>
            <div className="mb-3">
                
              {/* <label className="form-label" htmlFor="phone">Contact No.</label> */}
              <input
                className="form-control reserve-form"
                type="email"
                name="email"
                placeholder="Email address"
                onChange={(e) => reserveInfo(e)}
              />
            </div>
            <div className="mb-3">
                
              {/* <label className="form-label" htmlFor="people">Table for</label> */}
              <input 
                className="form-control reserve-form" 
                type="number" 
                name="people"
                min="1" 
                max="12"
                placeholder="Table for"
                onChange={(e) => reserveInfo(e)}
              />
            </div>
            <div className="mb-3">
                
              {/* <label className="form-label" htmlFor="date">Date</label> */}
              <input 
                className="form-control reserve-form" 
                type="date" 
                name="date" 
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => reserveInfo(e)}
              />
            </div>
            <div className="mb-3">
                
              {/* <label htmlFor="time" className="form-label">Time</label> */}
                <select name="time" className="form-select reserve-form" onChange={(e) => reserveInfo(e)}>
                <option>Select Time</option>
                {
                  time.map((time) => (
                    <option value={time.time}>{time.time}</option>
                  ))
                }
              </select>
            </div>
            <button className="btn-red-small" type="submit">Reserve a Table</button>
          </form>
        </div>
      </div>
      </div>
  </>
  )
}

export default Reservation