export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['members', 'Members Records', 'Members priority queue', 'Open', 'Members exception list', 'Community Lead', '$0'],
  ['groups', 'Groups Records', 'Groups priority queue', 'Review', 'Groups exception list', 'Community Lead', '$0'],
  ['events', 'Events Records', 'Events priority queue', 'Action needed', 'Events exception list', 'Community Lead', '$0'],
  ['giving', 'Giving Records', 'Giving priority queue', 'Open', 'Giving exception list', 'Community Lead', '$0'],
  ['volunteers', 'Volunteers Records', 'Volunteers priority queue', 'Review', 'Volunteers exception list', 'Operations Lead', '$0'],
  ['pastoral-care', 'Pastoral Care Records', 'Pastoral Care priority queue', 'Action needed', 'Pastoral Care exception list', 'Operations Lead', '$0'],
  ['facilities', 'Facilities Records', 'Facilities priority queue', 'Open', 'Facilities exception list', 'Operations Lead', '$0'],
  ['programs', 'Programs Records', 'Programs priority queue', 'Review', 'Programs exception list', 'Operations Lead', '$0'],
  ['communications', 'Communications Records', 'Communications priority queue', 'Action needed', 'Communications exception list', 'Governance Lead', '$0'],
  ['outreach', 'Outreach Records', 'Outreach priority queue', 'Open', 'Outreach exception list', 'Governance Lead', '$0'],
  ['safety', 'Safety Records', 'Safety priority queue', 'Review', 'Safety exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["congregation-services","Congregation Services Records","Congregation Services operating queue","Open","Congregation Services follow-up list","Church Mosque Temple Management","$0"],
  ["volunteer-scheduling","Volunteer Scheduling Records","Volunteer Scheduling operating queue","Review","Volunteer Scheduling follow-up list","Church Mosque Temple Management","$0"],
  ["donation-programs","Donation Programs Records","Donation Programs operating queue","Review","Donation Programs follow-up list","Church Mosque Temple Management","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
