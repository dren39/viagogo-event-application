import React, { Component } from 'react'
import {json} from '../eventlist'
import EventsCard from './EventsCard'
import EventDetail from './EventDetail'
import FilterDropDown from './FilterDropdown'
import { Card } from 'semantic-ui-react'

class EventsContainer extends Component {

  state = {
    eventsBank: json["Items"],
    filteredEvents: json["Items"],
    displayModal: false,
    clickedEvent: null
  }

  toggleModal = (eventObj) => {
    // pass down to EventsCard component, passes clicked event object back to callback function
    // set the boolean in state to true to render the EventDetail component
    // clicked event object saved to state and passed to EventDetail for render
    // if callback invoked by onClose event then event object is falsey then set boolean to false and close modal
    if(eventObj) {
      this.setState({displayModal: !this.state.displayModal, clickedEvent: eventObj})
    }
    else {
      this.setState({displayModal: !this.state.displayModal})
    }
  }

  filterHandler = (selection) => {
    // pass down to FilterDropdown
    // when filter click invoke callbac with selection text
    // filter events bank with selection text and set filteredEvent in state with new filter 
    if(selection === "No selection") {
      this.setState({filteredEvents: this.state.eventsBank})
    }
    else {
      const filter = this.state.eventsBank.filter(event => {
        return event.VenueCity.includes(selection)
      })
      this.setState({filteredEvents: filter})
    }
  }

  render() {
    return (
      <div id="content-container">
        <div id="dropdown-container">
          <FilterDropDown filterHandler={this.filterHandler}/>
        </div>
        <Card.Group itemsPerRow={3} centered>
          {this.state.filteredEvents.map(eventObj => <EventsCard key={eventObj.EventId} event={eventObj} toggleModal={this.toggleModal}/>)}
        </Card.Group>
        {this.state.displayModal ? <EventDetail event={this.state.clickedEvent} toggleModal={this.toggleModal}/> : null}
      </div>
    )
  }
}

export default EventsContainer;