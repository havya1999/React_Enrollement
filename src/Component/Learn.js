import React from "react";

function Learn() {
  return (
    <>
      <section id="learn" class="p-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img
                class="img-fluid p-4 d-none d-sm-block"
                src="./assets/fundamental.png"
                alt=""
              />
            </div>
            <div class="col-md">
              <h2>Learn Fundamentals</h2>
              <p>
                If you are learning web development, you will come across terms
                like HTML, CSS, and JavaScript. These are often called the
                building blocks of the Web.
              </p>
              <p>
                These three tools dominate web development. Every library or
                tool seems to be centered around HTML, CSS, and JS. So if you
                want to become a web developer, you need to learn them well.
                You'll also discover that websites are mostly built from these
                three languages.
              </p>
              <a href="" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"> Read More</i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="bg-dark p-3 text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
            
               <h2>Learn React</h2>
              <p>
                If you are learning web development, you will come across terms
                like HTML, CSS, and JavaScript. These are often called the
                building blocks of the Web.
              </p>
              <p>
                These three tools dominate web development. Every library or
                tool seems to be centered around HTML, CSS, and JS. So if you
                want to become a web developer, you need to learn them well.
                You'll also discover that websites are mostly built from these
                three languages.
              </p>
              <a href="" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"> Read More</i>
              </a>
            </div>
            <div class="col-md">
            <img
                class="img-fluid p-5 d-none d-sm-block"
                style={{width:'80%'}}
                src="./assets/reactlearn.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;
