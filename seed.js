const Event = require('./server/db/models/event')
const Code = require('./server/db/models/code')
const Guest = require('./server/db/models/guest')

const events = [
  { title: `Mehendi`, date: 'Friday, August 31, 2018', time: '5:00 PM', location: '2986 Blue Heron Rd, Normal, IL 61761' },
  { title: `Niharika's Haldi`, date: 'Saturday, September 1, 2018', time: '11:00 AM', location: '2986 Blue Heron Rd, Normal, IL 61761' },
  { title: 'Wedding', date: 'Sunday, September 2, 2018', time: '11:30 AM', location: 'Parke Regency, 1413 Leslie Dr, Bloomington, IL 61704', note: 'Baaraat starts at 10 AM' },
  { title: 'Reception', date: 'Sunday, September 2, 2018', time: '7:00 PM', location: 'Parke Regency, 1413 Leslie Dr, Bloomington, IL 61704', note: 'Cocktail hour starts at 5:30 PM' },
]

function createCodesSeed(startNum, endNum) {
  let seedArr = []
  for (var i = startNum; i <= endNum; i++) {
    let seedObj = { code: i }
    seedArr.push(seedObj)
  }
  return seedArr
}

const codes = createCodesSeed(5001, 5400)

const guests = [
  { name: `Sneha Pokharel`, email: `spokharel1991@gmail.com`, code: 5001 },
  { name: `Kosha Patel`, email: `kpatel7389@gmail.com`, code: 5002 },
  { name: `Pujitha Kallakuri`, email: `mani.kallakuri@gmail.com`, code: 5003 },
  { name: `Prerna Bodalia`, email: `pbodal2@gmail.com`, code: 5004 }
]

const seed = () =>
  Promise.all(events.map(event =>
    Event.create(event)))
  .then(() =>
  Promise.all(codes.map(code =>
    Code.create(code)
  )))
  .then(() =>
  Promise.all(guests.map(guest => {
    Guest.create(guest)
    .then((createdGuest) => {
      Code.findOne({
        where: {
          code: guest.code
        }
      })
      .then(code => {
        createdGuest.setCode(code)
      })
    })
    }
  )))
  .catch(err => console.error(err))

module.exports = {
  seed: seed
}
