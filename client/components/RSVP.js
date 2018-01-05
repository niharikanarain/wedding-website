import React from 'react';

function RSVP () {
  return (
    <div className="column-flex">
      <div className="sub-title">
        <img src="/images/floral-divider3-reverse.png" className="divider" />
        <h1 className="fancy">You're invited</h1>
        <img src="/images/floral-divider3.png" className="divider" />
      </div>
      <h2 className="simple">To RSVP or view event details, enter the code on your invitation</h2>
      <form className="column-flex">
        <input type="text" className="rsvp-input" placeholder="e.g. 1234" />
        <div>
          <button type="submit" className="simple button" id="rsvp-page-button">Find RSVP</button>
        </div>
      </form>
    </div>
  )
}

export default RSVP
