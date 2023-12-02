import React from 'react'

function Newsletter() {
  return (
    
    <section class="bg-primary  text-light p-3">
      <div class="container">
        <div class="d-md-flex justify-content-between align-items-center">
          <h3>Sign Up For Your Newsletter</h3>
          <div class="input-group news-input">
            <input type="text" class="form-control" placeholder="Enter Email" />
            <button
              class="btn btn-dark btn-lg"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter