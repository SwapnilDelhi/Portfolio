import {
  missionReliefImg,
  padDistributionImg,
  dentalImg,
  awarenessImg,
  heatCampaignImg,
  environmentImg,
  sanskarImg,
  yogaImg,
  bookImg,
  unicefEventImg,
} from '../assets/images/events';

// Add new events here — they'll automatically sort by date and render
// on the Events page. `sortDate` must be ISO (YYYY-MM-DD) for correct
// ordering; `date` is the display string shown to the user.
export const events = [
  {
    id: 'unicef-maternal-healthcare-labour-room',
    date: '21 August 2026',
    sortDate: '2026-08-21',
    title: 'UNICEF-linked Maternal Healthcare Initiative',
    description:
      'Youth Vision India began work on a UNICEF-linked initiative focused on labour-room facilities and maternal healthcare in government hospitals, identifying gaps in service delivery and practical measures to strengthen maternal care, accessibility, and quality of public service.',
    image: unicefEventImg,
    imageAlt: 'Youth Vision India initiative focused on maternal healthcare, public-service delivery, and women’s welfare with UNICEF collaboration',
  },
  {
    id: 'mission-relief-flood-response',
    date: '15 September 2025',
    sortDate: '2025-09-15',
    title: 'Mission Relief — Flood Response (Amritsar & Himachal Pradesh)',
    description:
      'Distributed food packets, drinking water, clothing, hygiene kits, and essential relief materials to flood-affected families.',
    image: missionReliefImg,
    imageAlt: 'Swapnil Pandey leading Mission Relief flood response and community support in affected regions',
  },
  {
    id: 'international-womens-day',
    date: '08 March 2026',
    sortDate: '2026-03-08',
    title: "Sanitary Pads Distribution — International Women's Day",
    description:
      "Distributed sanitary pads and hygiene essentials while promoting menstrual health and women's well-being.",
    image: padDistributionImg,
    imageAlt: 'Sanitary pads distribution drive promoting women’s hygiene and awareness',
  },
  {
    id: 'dental-oral-hygiene',
    date: '20 April 2026',
    sortDate: '2026-04-20',
    title: 'Dental / Oral Hygiene Camp',
    description:
      'Organized a free community dental check-up and oral hygiene awareness camp with healthcare professionals.',
    image: dentalImg,
    imageAlt: 'Dental and oral hygiene awareness camp for underserved communities',
  },
  {
    id: 'earth-day-awareness',
    date: '22 April 2026',
    sortDate: '2026-04-22',
    title: 'Earth Day Awareness Drive',
    description:
      'Promoted environmental responsibility through awareness campaigns and community engagement.',
    image: awarenessImg,
    imageAlt: 'Earth Day awareness drive focused on environmental responsibility and public engagement',
  },
  {
    id: 'beat-the-heat',
    date: '25 May 2026',
    sortDate: '2026-05-25',
    title: 'Beat the Heat Campaign',
    description:
      'Distributed drinking water, ORS, and refreshments while raising awareness about heatstroke prevention.',
    image: heatCampaignImg,
    imageAlt: 'Beat the Heat campaign distributing water and ORS during summer relief efforts',
  },
  {
    id: 'yvi-sanskar-mahotsav',
    date: '01 – 07 June 2026',
    sortDate: '2026-06-01',
    title: 'YVI संस्कार महोत्सव 2026',
    description:
      'Week-long nationwide volunteer initiative focusing on service, leadership, and community development.',
    image: sanskarImg,
    imageAlt: 'YVI Sanskar Mahotsav initiative promoting service, leadership, and community development',
  },
  {
    id: 'green-future-initiative',
    date: '05 June 2026',
    sortDate: '2026-06-05',
    title: 'Green Future Initiative — World Environment Day',
    description:
      'Conducted a sapling plantation drive to encourage environmental conservation and community participation.',
    image: environmentImg,
    imageAlt: 'Green Future tree plantation drive under World Environment Day awareness campaign',
  },
  {
    id: 'books-distribution-bihar',
    date: '02 August 2026',
    sortDate: '2026-08-02',
    title: 'Books Distribution & Free Education for Underprivileged Children in Bihar',
    description:
      'Distributed books and launched free education support for underprivileged children across Bihar, empowering access to learning and opportunity.',
    image: bookImg,
    imageAlt: 'Books distribution and free education support for underprivileged children in Bihar',
  },
  {
    id: 'international-yoga-day',
    date: '21 June 2026',
    sortDate: '2026-06-21',
    title: 'International Yoga Day Celebration',
    description:
      'Organized a community yoga session to promote physical fitness, mental well-being, and healthy living.',
    image: yogaImg,
    imageAlt: 'International Yoga Day community session promoting health, mindfulness, and well-being',
  },
];

export function getSortedEvents() {
  return [...events].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}