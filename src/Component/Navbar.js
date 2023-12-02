import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-2 fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">Frontend Camper</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#learn" class="nav-link">What you learn</a>
          </li>
          <li class="nav-item">
            <a href="#quetions" class="nav-link">Questions</a>
          </li>
          <li class="nav-item">
            <a href="#instructions" class="nav-link">Instructors</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar