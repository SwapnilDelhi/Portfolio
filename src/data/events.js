// Add new events here — they'll automatically sort by date and render
// on the Events page. `sortDate` must be ISO (YYYY-MM-DD) for correct
// ordering; `date` is the display string shown to the user.
export const events = [
  {
    id: 'mission-relief-flood-response',
    date: '15 September 2025',
    sortDate: '2025-09-15',
    title: 'Mission Relief — Flood Response (Amritsar & Himachal Pradesh)',
    description:
      'Distributed food packets, drinking water, clothing, hygiene kits, and essential relief materials to flood-affected families.',
  },
  {
    id: 'international-womens-day',
    date: '08 March 2026',
    sortDate: '2026-03-08',
    title: "Sanitary Pads Distribution — International Women's Day",
    description:
      "Distributed sanitary pads and hygiene essentials while promoting menstrual health and women's well-being.",
  },
  {
    id: 'dental-oral-hygiene',
    date: '20 April 2026',
    sortDate: '2026-04-20',
    title: 'Dental / Oral Hygiene Camp',
    description:
      'Organized a free community dental check-up and oral hygiene awareness camp with healthcare professionals.',
  },
  {
    id: 'earth-day-awareness',
    date: '22 April 2026',
    sortDate: '2026-04-22',
    title: 'Earth Day Awareness Drive',
    description:
      'Promoted environmental responsibility through awareness campaigns and community engagement.',
  },
  {
    id: 'beat-the-heat',
    date: '25 May 2026',
    sortDate: '2026-05-25',
    title: 'Beat the Heat Campaign',
    description:
      'Distributed drinking water, ORS, and refreshments while raising awareness about heatstroke prevention.',
  },
  {
    id: 'yvi-sanskar-mahotsav',
    date: '01 – 07 June 2026',
    sortDate: '2026-06-01',
    title: 'YVI संस्कार महोत्सव 2026',
    description:
      'Week-long nationwide volunteer initiative focusing on service, leadership, and community development.',
  },
  {
    id: 'green-future-initiative',
    date: '05 June 2026',
    sortDate: '2026-06-05',
    title: 'Green Future Initiative — World Environment Day',
    description:
      'Conducted a sapling plantation drive to encourage environmental conservation and community participation.',
  },
  {
    id: 'international-yoga-day',
    date: '21 June 2026',
    sortDate: '2026-06-21',
    title: 'International Yoga Day Celebration',
    description:
      'Organized a community yoga session to promote physical fitness, mental well-being, and healthy living.',
  },
];

export function getSortedEvents() {
  return [...events].sort((a, b) => a.sortDate.localeCompare(b.sortDate));
}