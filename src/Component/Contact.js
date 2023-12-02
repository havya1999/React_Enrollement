import React from 'react'

function Contact() {
  return (
    <>

<section class="p-5 ">
      <div class="container">
        <div class="row  g-4">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="fw-bold">Main Location:</span> 50 Main st Boston MA
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Phone: </span>(555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div class="col-md">
            <img
              class="img-fluid p-5 pt-2"
              src="./assets/Contact.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <footer class="p-3 bg-dark text-center text-light position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2023 Frontend Bootcamp</p>
        <a href="#" class="position-absolute bottom-0 end-0 p-3">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Contact