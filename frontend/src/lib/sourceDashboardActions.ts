export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "church-mosque-temple-management",
    "label": "Church Mosque Temple Management",
    "description": "Open Church Mosque Temple Management workflows elevated from AIChurchMosqueTempleManagement.",
    "href": "/congregation-services",
    "sourceProjects": [
      "AIChurchMosqueTempleManagement"
    ],
    "examples": [
      "Congregation Services",
      "Volunteer Scheduling",
      "Donation Programs"
    ],
    "count": 1
  }
];
