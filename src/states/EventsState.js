import axios from "axios";

const EventsState = () => {
  let events = []
  const requestData = () => {
    axios.all([
      axios.get(`https://626268af327d3896e2861d37.mockapi.io/events`)
    ])
      .then(axios.spread(data => {
        data.data.forEach(event => {
          events.push(event)
        })
      }))
      .catch(err => err);
  }
  requestData()
  return events
}

export default EventsState;