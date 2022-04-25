import axios from "axios";

const EventsState = () => {
  let events = []
  const requestData = () => {
    axios.all([
      axios.get(`https://ddreactappevents.herokuapp.com/data`)
    ])
      .then(axios.spread(data => {
        console.log(data);
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