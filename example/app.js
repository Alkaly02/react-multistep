import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'

const App = () => (
  <div className='container'>
    <MultiStep activeStep={0} prevButton={{style:{ background: 'red' }, title: 'prev step'}} >
      <StepOne title='Step 1'/>
      <StepTwo title='Step 2'/>
      <StepThree title='Step 3'/>
      <StepFour title='Step 4'/>
    </MultiStep>
    <div className='app-footer'>
      <h6>Use navigation buttons or click on progress bar for next step.</h6>
      Code is on{' '}
      <a href='https://github.com/Srdjan/react-multistep' target='_blank' rel='noreferrer'>
        github
      </a>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
