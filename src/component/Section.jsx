import React from 'react';
import { useState } from 'react';

export default function Section() {
  const [add, setAdd] = useState(0)
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  const [plus, setPlus] = useState(0)
  const [minus, setMinus] = useState(0)
  const [items, setItems] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function addItems(value) {
    // items[index]+=1
    // setItems([...items])
    setItems([...items, value])
  }
  function addPlus(index) {
    items[index] += 1
    setItems([...items])

  }
  function addMinus(index) {
    items[index] -= 1
    setItems([...items])

  }


  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }



  function filterItems() {
    let result = items.filter((item) => item % 2 === 0)
    setItems([...result])

  }
  return (
    <div className='container mt-4'>

      <div className='container mt-4'>
        {isLoggedIn ? (
          <div>
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>


      <h1>{count} :Metr</h1>
      <button onClick={() => setCount((prev) => prev + step)}>yurish</button>
      <h1>Qadam Kattaligi: {step}</h1>
      <button onClick={() => setStep((prev) => prev + 1)}>qadamni kengaytirish</button>



      <div className='mt-4'>
        <button onClick={() => addItems(1)} className='btn btn-warning' >Add Counter</button>
        <button onClick={filterItems} className='btn btn-warning' >Filter</button>
        {
          items.map((items, index) => {
            return (
              <div className="container">
                <div className="row mt-3">
                  <div className='d-flex mt-4'>

                    <button className='btn btn-info' onClick={() => addPlus(index)}>
                      +
                    </button>
                    <h1>{items}</h1>
                    <button className='btn btn-danger' onClick={() => addMinus(index)}>
                      -
                    </button>
                  </div>

                </div>
              </div>

            )

          })
        }

      </div>



    </div>





  );
}
