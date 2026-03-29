import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock the GreyButton component
jest.mock('../components/GreyButton', () => {
  return function MockGreyButton({ children, onClick, disabled, variant }) {
    return (
      <button 
        onClick={onClick} 
        disabled={disabled}
        data-variant={variant}
      >
        {children}
      </button>
    )
  }
})

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to Grey Button App')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Home />)
    expect(screen.getByText(/A Next.js application showcasing/)).toBeInTheDocument()
  })

  it('renders multiple buttons', () => {
    render(<Home />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
    expect(screen.getByText('Large Button')).toBeInTheDocument()
    expect(screen.getByText('Disabled Button')).toBeInTheDocument()
  })

  it('renders the footer text', () => {
    render(<Home />)
    expect(screen.getByText('Built with Next.js 14 and Bootstrap 5')).toBeInTheDocument()
  })
})