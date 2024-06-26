import { time } from "../time"

const Reservation = () => 
{
  return (
  <>
    <div className="bg-reserve">

    
      <div className="container reserve-container">
        <div className="reserve">
          <form>
            <div className="mb-3">
              {/* <label htmlFor="location" className="form-label">Location</label> */}
              <select name="location" className="form-select reserve-form">
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
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
                required
              />
            </div>
            <div className="mb-3">
              {/* <label className="form-label" htmlFor="date">Date</label> */}
              <input 
                className="form-control reserve-form" 
                type="date" 
                name="date" 
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="time" className="form-label">Time</label> */}
              <select name="time" className="form-select reserve-form">
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