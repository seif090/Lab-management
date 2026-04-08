import { cookies } from "next/headers";

export const AUTH_COOKIE = "clinical_nexus_session";

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export const demoUsers: DemoUser[] = [
  {
    id: "usr-admin-01",
    name: "د. أحمد خالد",
    email: "admin@clinicalnexus.ai",
    password: "Admin123!",
    role: "System Administrator",
  },
  {
    id: "usr-path-01",
    name: "د. سارة خليل",
    email: "pathology@clinicalnexus.ai",
    password: "Path123!",
    role: "Senior Pathologist",
  },
];

export async function getCurrentSession() {
  const store = await cookies();
  const value = store.get(AUTH_COOKIE)?.value;

  if (!value) {
    return null;
  }

  const user = demoUsers.find((entry) => entry.id === value);
  return user ?? null;
}
