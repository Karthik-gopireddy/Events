/* eslint-disable consistent-return */
// Write your code here
import './index.css'
import {Component} from 'react'

const registrationStatus = {
  initial: 'INITIAL',
  yettoregister: 'YET_TO_REGISTER',
  registred: 'REGISTERED',
  registrationsclosed: 'REGISTRATIONS_CLOSED',
}

class ActionEventRegistrationDetails extends Component {
  state = {
    apiStatus: registrationStatus.registred,
  }

  renderinitialView = () => (
    <div className="initial">
      <p className="initialview">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderClosedView = () => (
    <div className="closedcontainer">
      <img
        className="closedimage"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="closedh1">Registrations Are Closed Now!</h1>
      <p className="closedpara">Stay tuned. We will reopen</p>
    </div>
  )

  renderregistredView = () => (
    <div className="closedcontainer">
      <img
        className="registeredimage"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1 className="closedh1">You have already registered for the event</h1>
    </div>
  )

  renderyettoregisterView = () => (
    <div className="closedcontainer">
      <img
        className="yettoregister"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yettoregisterpara">
        A live performance brings so much to your relationship with dance.
        seeing dance live can often make you fall totally in love with the
        beautiful art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    const {status} = this.props

    // eslint-disable-next-line default-case
    switch (status) {
      case registrationStatus.yettoregister:
        return this.renderyettoregisterView()
      case registrationStatus.registred:
        return this.renderregistredView()
      case registrationStatus.registrationsclosed:
        return this.renderClosedView()
      default:
        return this.renderinitialView()
    }
  }
}

export default ActionEventRegistrationDetails
