import { render, screen, fireEvent } from '@testing-library/react'
import GreyButton from '../components/GreyButton'

describe('GreyButton', () => {
  it('renders with default text', () => {
    render(<GreyButton />)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('renders with custom children', () => {
    render(<GreyButton>Click Me</GreyButton>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<GreyButton onClick={handleClick}>Test Button</GreyButton>)
    
    fireEvent.click(screen.getByText('Test Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <GreyButton onClick={handleClick} disabled>
        Disabled Button
      </GreyButton>
    )
    
    fireEvent.click(screen.getByText('Disabled Button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies large variant class', () => {
    render(<GreyButton variant="large">Large Button</GreyButton>)
    const button = screen.getByText('Large Button')
    expect(button).toHaveClass('btn-lg')
  })

  it('applies small variant class', () => {
    render(<GreyButton variant="small">Small Button</GreyButton>)
    const button = screen.getByText('Small Button')
    expect(button).toHaveClass('btn-sm')
  })

  it('applies outline variant class', () => {
    render(<GreyButton variant="outline">Outline Button</GreyButton>)
    const button = screen.getByText('Outline Button')
    expect(button).toHaveClass('btn-outline-secondary')
  })

  it('applies custom className', () => {
    render(<GreyButton className="custom-class">Custom Button</GreyButton>)
    const button = screen.getByText('Custom Button')
    expect(button).toHaveClass('custom-class')
  })

  it('is disabled when disabled prop is true', () => {
    render(<GreyButton disabled>Disabled Button</GreyButton>)
    const button = screen.getByText('Disabled Button')
    expect(button).toBeDisabled()
  })

  it('handles mouse events for press effect', () => {
    render(<GreyButton>Press Me</GreyButton>)
    const button = screen.getByText('Press Me')
    
    fireEvent.mouseDown(button)
    fireEvent.mouseUp(button)
    fireEvent.mouseLeave(button)
    
    // Should not throw any errors
    expect(button).toBeInTheDocument()
  })
})