export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIChurchOperations', ownership: 'Members source capabilities and workflows', coverage: ['Members', 'Groups', 'Events'] },
  { name: 'AICommunityEngagement', ownership: 'Groups source capabilities and workflows', coverage: ['Giving', 'Volunteers', 'Pastoral Care'] },
  { name: 'AIVolunteerScheduling', ownership: 'Events source capabilities and workflows', coverage: ['Facilities', 'Programs', 'Communications'] },
  { name: 'AIDonationInsights', ownership: 'Giving source capabilities and workflows', coverage: ['Outreach', 'Safety', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Members', value: '84', note: 'Active' },
  { label: 'Groups', value: '61', note: 'Open' },
  { label: 'Events', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Members operating view', 'Groups operating view', 'Events operating view', 'Giving operating view', 'Volunteers operating view', 'Pastoral Care operating view', 'Facilities operating view', 'Programs operating view'];
export const workflowHighlights = ['Members workflow with records, approvals, audit, and reporting', 'Groups workflow with records, approvals, audit, and reporting', 'Events workflow with records, approvals, audit, and reporting', 'Giving workflow with records, approvals, audit, and reporting', 'Volunteers workflow with records, approvals, audit, and reporting'];
