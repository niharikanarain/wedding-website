import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Main extends Component {

  componentDidMount () {
    let countDownDate = new Date('Sep 2, 2018 11:30:00').getTime()
    let updateCountDown = setInterval(() => {
      let now = new Date().getTime();
      let difference = countDownDate - now;
      let days = Math.floor(difference / (1000 * 60 * 60 * 24))
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      document.getElementById('countDown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (difference < 0) {
        clearInterval(updateCountDown)
      document.getElementById('countDown').innerHTML = '0d 0h 0m 0s'
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        <div id="homeTitle">
          <img src="/images/side_flower.png" />
          <div id="homeTitle-text">
            <h1 className="fancy">Monil & Niharika</h1>
            <h3 className="simple">September 2, 2018 | Bloomington, IL</h3>
            <p id="countDown" className="simple"/>
            <Link to="/rsvp-events">
              <button className="simple button" id="home-rsvp-button">RSVP</button>
            </Link>
          </div>
        </div>
        <div id="ourStory">
          <div className="sub-title">
            <img src="/images/floral-divider3-reverse.png" className="divider" />
            <h1 className="fancy">Our Story</h1>
            <img src="/images/floral-divider3.png" className="divider" />
          </div>
          <div id="ourStory-text-pic">
            <img src="/images/our_story_pic.jpg" />
            <p className="simple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pharetra augue, a ornare elit. Nullam porta, ex ut egestas luctus, purus ligula placerat odio, et varius ligula erat in orci. Integer auctor tellus mattis, commodo nunc sit amet, tincidunt dolor. Proin eros nunc, vestibulum eget nisi eu, rhoncus porttitor risus. Nullam id placerat sapien. Quisque tellus metus, placerat vel arcu sit amet, elementum volutpat leo. Aliquam sagittis egestas accumsan.</p>
          </div>
        </div>
      </div>
    )
  }
}
