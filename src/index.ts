//https://support.atlassian.com/statuspage/docs/enable-webhook-notifications/

export enum ComponentName {
	API = "API",
	ChatGPT = "ChatGPT",
	Labs = "Labs",
	Playground = "Playground",
}

export enum Indicator {
	None = "none",
	Minor = "minor",
	Major = "major",
	Critical = "critical",
}

export enum BlendedStatus {
	AllSystemsOperational = "All Systems Operational",
	PartialSystemOutage = "Partial System Outage",
	MajorServiceOutage = "Major Service Outage",
	MinorServiceOutage = "Minor Service Outage",
	PartiallyDegradedService = "Partially Degraded Service",
}

export interface OpenAIStatus {
	page: Page;
	status: {
		description: BlendedStatus;
		indicator: Indicator;
	};
}

// Impact: None (black), Minor (yellow), Major (orange), or Critical (red)
export enum Impact {
	None = "None",
	Minor = "Minor",
	Major = "Major",
	Critical = "Critical",
}
//  Status: Scheduled, In Progress, Verifying, or Completed
export enum ScheduledMaintenenceStatus {
	Scheduled = "Scheduled",
	InProgress = "In Progress",
	Verifying = "Verifying",
	Completed = "Completed",
}

// Each component is listed along with its status - one of operational, degraded_performance, partial_outage, or major_outage.
export enum ComponentStatus {
	Operational = "operational",
	DegradedPerformance = "degraded_performance",
	PartialOutage = "partial_outage",
	MajorOutage = "major_outage",
}

interface Page {
	id: "jbxzcdv9xc4d";
	name: "OpenAI";
	url: "https://status.openai.com";
	updated_at: string;
}

interface Component {
	created_at: string;
	description: string | null;
	group: boolean;
	group_id: string | null;
	id: string;
	name: ComponentName;
	only_show_if_degraded: boolean;
	page_id: "jbxzcdv9xc4d";
	position: number;
	showcase: boolean;
	start_date: string | null;
	status: ComponentStatus;
	updated_at: string;
}

export interface OpenAIComponentStatus {
	page: Page;
	components: Component[];
}

interface IncidentUpdate {
	body: string;
	created_at: string;
	display_at: string;
	id: string;
	incident_id: string;
	status: string;
	updated_at: string;
}

export enum IncidentStatus {
	Investigating = "investigating",
	Identified = "identified",
	Monitoring = "monitoring",
	Resolved = "resolved",
	Postmortem = "postmortem",
}

interface Incident {
	created_at: string;
	id: string;
	impact: Impact;
	incident_updates: IncidentUpdate[];
	monitoring_at: string | null;
	name: string;
	page_id: "jbxzcdv9xc4d";
	resolved_at: string | null;
	shortlink: string;
	status: IncidentStatus;
	updated_at: string;
}

export interface OpenAIIncident {
	page: Page;
	incidents: Incident[];
}
