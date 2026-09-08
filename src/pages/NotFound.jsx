import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        subtitle="The page you requested does not exist or may have moved."
      />
      <section className="section">
        <div className="container">
          <Link className="btn btn-primary" to="/">Return to the homepage</Link>
        </div>
      </section>
    </>
  );
}