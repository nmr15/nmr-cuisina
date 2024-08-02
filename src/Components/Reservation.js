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

  const [isSubmitted, setIsSubmitted] = useState(true);

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
    setIsSubmitted(false);
  }

  const newReservation = () =>
  {
    setIsSubmitted(true);
  }

  console.log(errors);

  return (
  <>
    <div className="bg-reserve">
      {
        isSubmitted ? 
        <div className="container reserve-container d-flex justify-content-center">
          <div className="reserve">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <select name="location"
                  className="form-select reserve-form"
                  onChange={(e) => reserveInfo(e)}
                  {...register("location", {
                    required: true
                  })}
                >
                  <option value="">Select Location</option>
                  <option value="Pomona">Pomona</option>
                  <option value="Chino">Chino</option>
                  <option value="Glendora">Glendora</option>
                  <option value="Rancho Cucamonga">Rancho Cucamonga</option>
                </select>
                {errors.location && errors.location.type === "required" && (
                  <p className="errorMsg text-danger">Location is required.</p>
                )}
              </div>
              <div className="mb-3">

                {/* <label className="form-label" htmlFor="phone">Contact No.</label> */}
                <input
                  className="form-control reserve-form"
                  type="text"
                  name="email"
                  placeholder="Email address"
                  onChange={(e) => reserveInfo(e)}
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg text-danger">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg text-danger">Email is not valid.</p>
                )}
              </div>
              <div className="mb-3">

                {/* <label className="form-label" htmlFor="people">Table for</label> */}
                <input
                  className="form-control reserve-form"
                  type="number"
                  name="people"
                  placeholder="Table for"
                  onChange={(e) => reserveInfo(e)}
                  {...register("people", {
                    required: true,
                    valueAsNumber: true,
                    max: 12,
                    min: 1
                  })}
                />
                {errors.people && errors.people.type === "required" && (
                  <p className="errorMsg text-danger">Number of guests is required.</p>
                )}
                {errors.people && errors.people.type === "min" && (
                  <p className="errorMsg text-danger">Minimum number of guests is 1</p>
                )}
                {errors.people && errors.people.type === "max" && (
                  <p className="errorMsg text-danger">Maximum number of guests is 12</p>
                )}
              </div>
              <div className="mb-3">

                {/* <label className="form-label" htmlFor="date">Date</label> */}
                <input
                  className="form-control reserve-form"
                  type="date"
                  name="date"
                  min={new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split("T")[0]}
                  onChange={(e) => reserveInfo(e)}
                  {...register("date", {
                    required: true
                  })}
                />
                {errors.date && errors.date.type === "required" && (
                  <p className="errorMsg text-danger">Date is required.</p>
                )}
              </div>
              <div className="mb-3">

                {/* <label htmlFor="time" className="form-label">Time</label> */}
                <select
                  name="time"
                  className="form-select reserve-form"
                  onChange={(e) => reserveInfo(e)}
                  {...register("time", {
                    required: true
                  })}
                >
                  <option value="">Select Time</option>
                  {
                    time.map((time) => (
                      <option value={time.time}>{time.time}</option>
                    ))
                  }
                </select>
                {errors.time && errors.time.type === "required" && (
                  <p className="errorMsg text-danger">Time is required.</p>
                )}
              </div>
              <button className="btn-red-small" type="submit">Reserve a Table</button>
            </form>
          </div>
        </div>

        :
        
        <div className="container reserve-container-complete d-flex justify-content-center">
          <div className="reserve text-white">
            <h3>Your reservation has been confirmed</h3>
                <h3>Click <span className="text-primary ptr" onClick={newReservation}>here</span> to make another reservation</h3>
          </div>
          
        </div>
        
      }
      
    </div>
  </>
  )
}

export default Reservation