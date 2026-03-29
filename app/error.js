'use client'

import { useEffect } from 'react'
import GreyButton from '../components/GreyButton'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-4 text-danger mb-4">Something went wrong!</h1>
        <p className="lead mb-4 text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <GreyButton onClick={() => reset()}>
            Try Again
          </GreyButton>
          <GreyButton 
            variant="outline" 
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </GreyButton>
        </div>
      </div>
    </div>
  )
}