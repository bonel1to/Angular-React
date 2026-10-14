const colors = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  danger: '#ef4444',
}

function Button({ children, variant = 'primary', onClick, disabled = false }) {
  return (
    <button
      type="button"
      className="variant-button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colors[variant] ?? colors.primary,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  )
}

export default Button
