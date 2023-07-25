import React from 'react'
import './Metric.css'

const Metric = () => {
  return (
    <>
        <div className='metric container'>
            <div className='metric-content'>
                <div className='metric-header'>
                    <h1>For clients completing our program, outcomes show:</h1>
                </div>

                <div className='metric-flex'>
                    
                    <div className='metric-flexItem'>
                        <div className="metric-rate">
                            <h4>95%</h4>
                            <h3>family re-engagement</h3>
                            <p>Improvements with Family Relationships</p>
                        </div>
                    </div>

                    <div className='metric-flexItem'>
                        <div className="metric-rate">
                            <h4>60%</h4>
                            <h3>more effective</h3>
                            <p>Engagement with Outpatient Therapist/ Group</p>
                        </div>
                    </div>

                    <div className='metric-flexItem'>
                        <div className="metric-rate">
                            <h4>87%</h4>
                            <h3>more effective</h3>
                            <p>Engagement with Primary Care Provider</p>
                        </div>
                    </div>

                    <div className='metric-flexItem'>
                        <div className="metric-rate">
                            <h4>87%</h4>
                            <h3>more effective</h3>
                            <p>Abstinent from Drugs & Alcohol</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default Metric
