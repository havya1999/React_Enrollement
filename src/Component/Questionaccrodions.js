import React from 'react'

function Questionaccrodions() {
  return (
    <>
    
    <section class="p-5">
      <div class="container">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <div class="accordion" id="quetions">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quetion-one"
              >
                Where are you located ?
              </button>
            </h2>
            <div
              id="quetion-one"
              class="accordion-collapse collapse show"
              data-bs-parent="#quetions"
            >
              <div class="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae numquam nostrum autem eligendi corrupti ad explicabo
                provident eius, fuga at impedit dolores exercitationem dolor
                deleniti animi tempora! Ab sint omnis nesciunt quod? Aperiam,
                doloremque officia sequi sit ex delectus libero tenetur sed,
                alias consectetur, qui eaque neque rem maxime! Qui.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quetion-two"
              >
                How much does it cost to attend ?
              </button>
            </h2>
            <div
              id="quetion-two"
              class="accordion-collapse collapse"
              data-bs-parent="#quetions"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                voluptatibus quos cupiditate provident fuga consectetur, fugit
                odit sint officiis animi repudiandae eligendi voluptate soluta
                nam at officia eveniet laboriosam ratione cum incidunt? Ipsum,
                reprehenderit impedit molestias dolorem id, quos commodi sit
                illum explicabo modi possimus eius vel quae! Quaerat, ex!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quetion-three"
              >
                What do i need to know ?
              </button>
            </h2>
            <div
              id="quetion-three"
              class="accordion-collapse collapse"
              data-bs-parent="#quetions"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quetion-three"
              >
                How do i sign up?
              </button>
            </h2>
            <div
              id="quetion-three"
              class="accordion-collapse collapse"
              data-bs-parent="#quetions"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quetion-three"
              >
                Do you help me find a jop ?
              </button>
            </h2>
            <div
              id="quetion-three"
              class="accordion-collapse collapse"
              data-bs-parent="#quetions"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Questionaccrodions