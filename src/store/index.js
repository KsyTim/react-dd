import {makeAutoObservable, onBecomeObserved} from 'mobx';
import {getEvents, addEvent, editEvent, deleteEvent, render} from '../api';
import moment from 'moment';

class EventsStore {
  data = [];
  filteredData = [];
  filterSorted = [];
  notArchiveEventsFlag = false;
  pastDataFlag = false;
  todayDataFlag = false;
  futureDataFlag = false;
  favoriteDataFlag = false;

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
    })

    onBecomeObserved(this, 'data', this.fetch);
  }

  get archiveEvents() {
    return this.data.filter(currEvent => currEvent.archive);
  }

  get notArchiveEvents() {
    return this.data.filter(currEvent => !currEvent.archive);
  }

  get pastData () {
    return this.data.filter(x => moment(x.date).isBefore(moment(), 'day') && !x.archive)
  }

  get todayData () {
    return this.data.filter(x => moment(x.date).isSame(moment(), 'day') && !x.archive)
  }

  get futureData () {
    return this.data.filter(x => moment(x.date).isAfter(moment(), 'day') && !x.archive)
  }

  get favoriteData() {
    return this.data.filter(x => x.favorite && !x.archive);
  }

  get newEventsFirst() {
    return this.filteredData ? this.filteredData.slice().sort((a, b) => new Date(b.date) - new Date(a.date)) : this.data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  get oldEventsFirst() {
    return this.filteredData ? this.filteredData.slice().sort((a, b) => new Date(a.date) - new Date(b.date)) : this.data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  get defaultEvents() {
    const flagData = [
      {'this.notArchiveEvents': this.notArchiveEventsFlag}, 
      {'this.pastData': this.pastDataFlag},
      {'this.futureData': this.futureDataFlag},
      {'this.favoriteData': this.favoriteDataFlag},
      {'this.todayData': this.todayDataFlag}
    ];
    flagData.forEach(data => {
      for (let key in data) {
        if (data[key]) {
          switch(key) {
            case 'this.notArchiveEvents':
              this.filterSorted = this.notArchiveEvents;
              break;
            case 'this.pastData':
              this.filterSorted = this.pastData;
              break;
            case 'this.futureData':
              this.filterSorted = this.futureData;
              break;
            case 'this.favoriteData':
              this.filterSorted = this.favoriteData;
              break;
            case 'this.todayData':
              this.filterSorted = this.todayData;
              break;  
            default:
              this.filterSorted = this.notArchiveEvents;
              break;
          }
        }
      }
    })
    return this.filterSorted.length ? this.filterSorted : this.notArchiveEvents;
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response;
    this.filteredData = response.filter(x => !x.archive);
  }

  *addEvent(data) {
    yield addEvent(data)
    yield this.fetch()
  }

  *editEvent(data) {
    yield editEvent(data)
    yield this.fetch()
  }

  *deleteEvent(id) {
    yield deleteEvent(id);
    yield this.fetch();
  }

  *render(history) {
    yield render(history);
    yield this.fetch();
  }
}

export const events = new EventsStore();