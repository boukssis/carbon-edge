"use client";

import { useActionState, type ReactNode } from "react";
import { submitEnquiry } from "@/app/actions/contact";
import { initialEnquiryState } from "@/lib/contact";
import { buildingTypes, projectStages, serviceOptions } from "@/lib/site";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  const id = name;
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.18em] text-copper uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error ? (
        <span id={`${id}-error`} className="mt-1.5 block text-sm text-copper">
          {error}
        </span>
      ) : null}
    </label>
  );
}

const control =
  "w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-copper";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initialEnquiryState);

  if (state.status === "preview") {
    return (
      <div className="border border-navy-900/10 bg-white px-6 py-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-copper uppercase">Enquiry received</p>
        <p className="mt-4 max-w-xl font-serif text-2xl leading-snug text-navy-900">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-6" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="fullName" error={state.fieldErrors?.fullName}>
          <input className={control} name="fullName" required autoComplete="name" />
        </Field>
        <Field label="Company" name="company" error={state.fieldErrors?.company}>
          <input className={control} name="company" required autoComplete="organization" />
        </Field>
        <Field label="Work email" name="email" error={state.fieldErrors?.email}>
          <input className={control} name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Phone" name="phone" error={state.fieldErrors?.phone}>
          <input className={control} name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Project location" name="location" error={state.fieldErrors?.location}>
          <input className={control} name="location" required placeholder="e.g. Marylebone, W1" />
        </Field>
        <Field label="Building type" name="buildingType" error={state.fieldErrors?.buildingType}>
          <select className={control} name="buildingType" defaultValue={buildingTypes[0]} required>
            {buildingTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Service required" name="serviceRequired" error={state.fieldErrors?.serviceRequired}>
          <select className={control} name="serviceRequired" defaultValue={serviceOptions[0]} required>
            {serviceOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Project stage" name="projectStage" error={state.fieldErrors?.projectStage}>
          <select className={control} name="projectStage" defaultValue={projectStages[0]} required>
            {projectStages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" name="message" error={state.fieldErrors?.message}>
        <textarea
          className={`${control} min-h-36`}
          name="message"
          required
          placeholder="Building, plant condition, programme pressure — as much as you can share."
        />
      </Field>

      {state.status === "error" ? (
        <p className="text-sm text-copper" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-copper-mid px-8 py-4 font-mono text-[11px] tracking-[0.2em] text-navy-950 uppercase transition-colors hover:bg-copper-light disabled:opacity-60"
      >
        {pending ? "Checking…" : "Send enquiry"}
      </button>
    </form>
  );
}
