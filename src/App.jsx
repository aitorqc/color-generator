import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <section className='container my-3'>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-auto">
            <h3>Color Generator</h3>
          </div>
          <div className="col-auto">
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#000fff" className={`form-control ${!error ? "" : "is-invalid"}`} />
            <div className="invalid-feedback">
              Need to be a hexadecimal value
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </section>
      <section className="container my-3">
        <div className="row justify-content-md-center">
          {list.map((c, i) => {
            return <SingleColor key={i} {...c} index={i}></SingleColor>
          })}
        </div>
      </section>
    </>
  );
}

export default App;
