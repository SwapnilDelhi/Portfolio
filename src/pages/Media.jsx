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
      { title: 'Newspaper 1', image: newspaper1, source: 'Newspaper', alt: 'Newspaper 1 cover' },
      { title: 'Newspaper 2', image: newspaper2, source: 'Newspaper', alt: 'Newspaper 2 cover' },
      { title: 'Newspaper 3', image: newspaper3, source: 'Newspaper', alt: 'Newspaper 3 cover' },
    ],
  },
  {
    name: 'Letter of Appetation',
    items: [
      { title: 'Letter 1', image: letter1, source: 'Appetation Letter', alt: 'Letter of Appetation 1' },
      { title: 'Letter 2', image: letter2, source: 'Appetation Letter', alt: 'Letter of Appetation 2' },
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
                          <img
                            src={item.image}
                            alt={item.alt}
                            style={{ width: '100%', borderRadius: '8px', marginTop: '12px' }}
                          />
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
