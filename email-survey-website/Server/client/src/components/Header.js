import React, { Component } from 'react'
import SignInWithGoogle from '../sign-in-with-google.png'
import emailySurvey from '../emaily-survey.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return ''
      case false:
        return (<li>
                  <a href='/auth/google'><img
                                           src={SignInWithGoogle}
                                           width='200'
                                           height='65'
                                           alt='Sign in with Google' /></a>
                </li>)
      default:
        return ([
          <li key='1'>
            <Payments/>
          </li>,
          <li key='2' style={{margin: '0 10px'}}>
            Credits:
            {this.props.auth.credits}
          </li>,
          <li key='3'>
            <a href='/api/logout'>Logout</a>
          </li>])

    }
  }
  render () {
    return (

      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo'>
          <img src={emailySurvey} height='65' alt='Emaily-Survey' />
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>

    )
  }
}

function mapStateToProps ({auth}) {
  return {auth}
}
export default connect(mapStateToProps)(Header)
