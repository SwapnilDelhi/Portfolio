import PageHeader from '../components/PageHeader';
import newspaper1 from '../assets/images/media/newspaper1.png';
import newspaper2 from '../assets/images/media/newspaper2.png';
import newspaper3 from '../assets/images/media/newspaper3.png';
import letter1 from '../assets/images/media/letter1.png';
import letter2 from '../assets/images/media/letter2.png';
import './InnerPage.css';

const CATEGORIES = [
  {
    name: 'Articles',
    items: [
      {
        title: 'Swapnil Pandey: A brilliant young mind discovered a remarkable math trick that impressed NASA and beyond',
        source: 'News18 हिंदी',
        link: 'https://share.google/vHt317zw7ibA8ZO17',
        embedLink: 'https://share.google/vHt317zw7ibA8ZO17',
      },
      {
        title: 'Swapnil Pandey: ISRO and NASA recognized the science behind a smart streetlight innovation',
        source: 'News18 हिंदी',
        link: 'https://share.google/lG4A1nvQBKtNmpnJt',
        embedLink: 'https://share.google/lG4A1nvQBKtNmpnJt',
      },
    ],
  },
  {
    name: 'Newspapers',
    items: [
      { title: 'Dainik Bhaskar', image: newspaper1, source: 'Dainik Bhaskar', alt: 'Dainik Bhaskar cover' },
      { title: 'Dainik Jagran', image: newspaper2, source: 'Dainik Jagran', alt: 'Dainik Jagran cover' },
      { title: 'Amar Ujala', image: newspaper3, source: 'Amar Ujala', alt: 'Amar Ujala cover' },
    ],
  },
  {
    name: 'Letter of Appetation',
    items: [
      { title: 'Hon’ble Energy Minister of Rajasthan, Shri Hiralal Nagar', image: letter2, source: 'Energy Minister of Rajasthan', alt: 'Letter from Hon’ble Energy Minister of Rajasthan, Shri Hiralal Nagar' },
    ],
  },
  // {
  //   name: 'Interviews',
  //   items: [1, 2, 3],
  // },
  // {
  //   name: 'Videos',
  //   items: [1, 2, 3],
  // },
  // {
  //   name: 'Podcasts',
  //   items: [1, 2, 3],
  // },
];

export default function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Press & Media Coverage"
        subtitle="Newspapers, interviews, videos, podcasts, and articles, organised in one dedicated section."
      />

      <section className="section">
        <div className="container">
          {CATEGORIES.map((cat) => (
            <div className="media-category" key={cat.name}>
              <div className="section-heading" style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px' }}>{cat.name}</h2>
                <div className="rule"></div>
              </div>
              <div className={`card-grid${cat.name === 'Letter of Appetation' ? ' letter-grid' : ''}`} style={{ marginTop: 0 }}>
                {cat.items.map((item, index) => {
                  const isArticle = item.source === 'News18 हिंदी';
                  const isNewspaper = item.image != null;

                  return (
                    <div className="info-card" key={`${cat.name}-${index}`}>
                      {isArticle ? (
                        <>
                          <h3 style={{ marginTop: '14px' }}>{item.title}</h3>
                          <p>{item.source} &middot; Article</p>
                          <iframe
                            src={item.embedLink}
                            title={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '220px', border: '0', borderRadius: '8px', marginTop: '12px' }}
                          />
                          <a href={item.link} target="_blank" rel="noreferrer" style={{ color: '#1d4ed8', fontWeight: 600, display: 'inline-block', marginTop: '10px' }}>
                            Open article
                          </a>
                        </>
                      ) : isNewspaper ? (
                        <>
                          <h3 style={{ marginTop: '14px' }}>{item.title}</h3>
                          {item.source && item.source !== item.title ? (
                            <p style={{ margin: '8px 0 0', color: '#6b7280' }}>{item.source}</p>
                          ) : null}
                          <a href={item.image} target="_blank" rel="noopener noreferrer" title="View full image">
                            <img
                              src={item.image}
                              alt={item.alt}
                              style={{ width: '100%', borderRadius: '8px', marginTop: '12px' }}
                            />
                          </a>
                        </>
                      ) : (
                        <>
                          <h3 style={{ marginTop: '14px' }}>{cat.name.slice(0, -1)} title</h3>
                          <p>Publication or source name &middot; Date</p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
