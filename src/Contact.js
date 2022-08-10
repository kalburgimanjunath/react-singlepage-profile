import React from 'react';
import { Formik } from 'formik';
export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
        Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
        tempus aliquam consequat.
      </p>
      <Formik>
        <form className="contact-form">
          <div>
            <div>Name</div>
            <input type="text" name="name" />
          </div>
          <div>
            <div>Email</div>
            <input type="text" name="name" />
          </div>
          <div>
            <div>Message</div>
            <textarea type="text" name="name" rows="4" cols="30"></textarea>
          </div>
          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </Formik>
    </div>
  );
}
