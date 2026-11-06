import { z } from "zod";
import { buildingTypes, projectStages, serviceOptions } from "./site";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  company: z.string().trim().min(2, "Please enter your company.").max(160),
  email: z.string().trim().email("Please enter a valid work email.").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().min(2, "Please enter the project location.").max(160),
  buildingType: z.enum(buildingTypes as unknown as [string, ...string[]]),
  serviceRequired: z.enum(serviceOptions as unknown as [string, ...string[]]),
  projectStage: z.enum(projectStages as unknown as [string, ...string[]]),
  message: z
    .string()
    .trim()
    .min(20, "Please add a short description of the building or brief.")
    .max(2000),
  website: z.string().max(0, "Rejected."),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryState = {
  status: "idle" | "error" | "preview";
  message?: string;
  fieldErrors?: Partial<Record<keyof EnquiryInput, string>>;
};

export const initialEnquiryState: EnquiryState = { status: "idle" };
