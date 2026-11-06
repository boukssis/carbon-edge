"use server";

import { enquirySchema, type EnquiryState } from "@/lib/contact";

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const raw = {
    fullName: String(formData.get("fullName") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    location: String(formData.get("location") ?? ""),
    buildingType: String(formData.get("buildingType") ?? ""),
    serviceRequired: String(formData.get("serviceRequired") ?? ""),
    projectStage: String(formData.get("projectStage") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  if (raw.website) {
    return {
      status: "preview",
      message:
        "This private design preview does not forward enquiries. Please contact Carbon Edge via LinkedIn until the website is authorised.",
    };
  }

  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: EnquiryState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key as keyof typeof fieldErrors]) {
        fieldErrors[key as keyof typeof fieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  return {
    status: "preview",
    message:
      "Thank you. This private design preview does not collect or forward confidential submissions. Please contact Carbon Edge Building Services or Ashlee Rising via LinkedIn until the website is formally authorised.",
  };
}
