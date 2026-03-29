'use client'

import { useState } from 'react'

const GreyButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const getButtonClasses = () => {
    let baseClasses = 'grey-button btn border-0 fw-medium text-white position-relative overflow-hidden'
    
    switch (variant) {
      case 'large':
        baseClasses += ' btn-lg px-4 py-3'
        break
      case 'small':
        baseClasses += ' btn-sm px-3 py-2'
        break
      case 'outline':
        baseClasses += ' btn-outline-secondary text-dark'
        break
      default:
        baseClasses += ' px-4 py-2'
    }

    if (disabled) {
      baseClasses += ' opacity-50'
    }

    return `${baseClasses} ${className}`
  }

  const getButtonStyle = () => {
    if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        borderColor: 'var(--grey-button-bg)',
        color: '#666',
      }
    }

    return {
      backgroundColor: 'var(--grey-button-bg)',
      color: 'var(--grey-button-text)',
      minWidth: '200px',
      minHeight: '100px',
      fontSize: '16px',
      fontWeight: '500',
      border: 'none',
      borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(isPressed && !disabled && {
        backgroundColor: 'var(--grey-button-active)',
        transform: 'scale(0.98)'
      })
    }
  }

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true)
    }
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const handleMouseLeave = () => {
    setIsPressed(false)
  }

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <button
      className={getButtonClasses()}
      style={getButtonStyle()}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    >
      <span className="position-relative z-1">
        {children || 'Button'}
      </span>
      
      {/* Hover effect overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 opacity-0 transition-opacity"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
          transition: 'opacity 0.2s ease'
        }}
      />
    </button>
  )
}

export default GreyButton