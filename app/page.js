import GreyButton from '../components/GreyButton'

export default function Home() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-4 mb-4 text-dark">Welcome to Grey Button App</h1>
        <p className="lead mb-4 text-muted">
          A Next.js application showcasing a beautiful grey button component.
        </p>
        
        <div className="mb-4">
          <GreyButton onClick={() => alert('Button clicked!')}>
            Click Me
          </GreyButton>
        </div>
        
        <div className="mb-4">
          <GreyButton variant="large" onClick={() => alert('Large button clicked!')}>
            Large Button
          </GreyButton>
        </div>
        
        <div className="mb-4">
          <GreyButton disabled>
            Disabled Button
          </GreyButton>
        </div>
        
        <div className="mt-5">
          <p className="text-muted small">
            Built with Next.js 14 and Bootstrap 5
          </p>
        </div>
      </div>
    </main>
  )
}