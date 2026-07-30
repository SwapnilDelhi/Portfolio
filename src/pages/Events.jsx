import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getSortedEvents } from '../data/events';
import './InnerPage.css';

export default function Events() {
  const sortedEvents = getSortedEvents();

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Events & Community Initiatives"
        subtitle="A record of the drives, camps, and celebrations carried out under Youth Vision India."
      />

      <section className="section">
        <div className="container">
          <div className="events-grid">
            {sortedEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image">
                  {event.image ? (
                    <img src={event.image} alt={event.imageAlt || event.title} />
                  ) : (
                    <ImagePlaceholder label={event.title} ratio="4 / 3" />
                  )}
                </div>
                <div className="event-body">
                  <div className="event-date">{event.date}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}