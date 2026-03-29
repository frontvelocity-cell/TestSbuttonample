import Link from 'next/link'
import GreyButton from '../components/GreyButton'

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-muted">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-4 text-muted">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/" className="text-decoration-none">
          <GreyButton>
            Go Back Home
          </GreyButton>
        </Link>
      </div>
    </div>
  )
}