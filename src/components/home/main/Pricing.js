import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className='card-deck mb-3 text-center'>
        <div className='card mb-4 shadow-sm'>
          <div className='card-header'>
            <h4 className='my-0 font-weight-normal'>Standard</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>
              $150 <small className='text-muted'>/ mo</small>
            </h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type='button'
              className='btn btn-lg btn-block btn-outline-primary'>
              Contact us
            </button>
          </div>
        </div>
        <div className='card mb-4 shadow-sm'>
          <div className='card-header'>
            <h4 className='my-0 font-weight-normal'>Standard + DB</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>
              $275 <small className='text-muted'>/ mo</small>
            </h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type='button' className='btn btn-lg btn-block btn-primary'>
              Contact us
            </button>
          </div>
        </div>
        <div className='card mb-4 shadow-sm'>
          <div className='card-header'>
            <h4 className='my-0 font-weight-normal'>Pro</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>
              $350 <small className='text-muted'>/ mo</small>
            </h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type='button' className='btn btn-lg btn-block btn-primary'>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
