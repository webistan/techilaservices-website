import { Timestamp } from "firebase/firestore";

export interface Job {
    jobID?: string;
    id: string;
    jobOpeningId: string;
    accountManager: string;
    contactName: string;
    clientName: string;
    availabilityDate: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    validity: number;
    expiredAt: Timestamp;
    jobDescription: string;
    jobTitle: string;
    priority: 'High' | 'Medium' | 'Low';
    budget: number;
    location: string;
    qualification: string;
    jobType: 'FT' | 'Contract';
    workExperience: number;
    status: "Draft" | "Open" | "Interviews" | "Selected" | "Offered" | "Offer Accepted" | "Filled" | "Closed" | "On-Hold" | "Cancelled";
    requiredSkills: string[];
    generateJD?: string | null;
} 