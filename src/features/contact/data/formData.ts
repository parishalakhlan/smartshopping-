export interface IdentityRoleOption {
  label: string;
  value: string;
}

export const identityRoles: IdentityRoleOption[] = [
  { label: "Customer", value: "Customer" },
  { label: "Partner", value: "Partner" },
  { label: "Student", value: "Student" },
  { label: "Brand", value: "Brand" },
  { label: "Media", value: "Media" },
  { label: "Other", value: "Other" },
];

export const formMetadata = {
  heading: "Send Us a Message",
  subheading: "Answer the fields below. Our team will respond promptly.",
};
