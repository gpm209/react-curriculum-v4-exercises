import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        No page found for: <code>{location.pathname}</code>
      </p>

      <Link to="/">Go Home</Link>
    </section>
  );
}
