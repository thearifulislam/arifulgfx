const API_URL = "http://localhost:4000/api";

let token: string | null = null; // Save JWT here

export function setToken(newToken: string) {
  token = newToken;
}

function headers() {
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  setToken(data.token);
  return data.user;
}

export async function register(name: string, email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Registration failed");
  return await res.json();
}

export async function getProfile() {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error("Unauthorized");
  return await res.json();
}

// Users
export async function getUsers() {
  const res = await fetch(`${API_URL}/users`, { headers: headers() });
  if (!res.ok) throw new Error("Unauthorized");
  return await res.json();
}
export async function createUser(user: { name: string; email: string; password: string; role?: string }) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Create failed");
  return await res.json();
}
export async function deleteUser(id: string) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Delete failed");
  return await res.json();
}

// Projects
export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`, { headers: headers() });
  if (!res.ok) throw new Error("Failed to get projects");
  return await res.json();
}

export async function getProject(id: string) {
  const res = await fetch(`${API_URL}/projects/${id}`, { headers: headers() });
  if (!res.ok) throw new Error("Failed to get project");
  return await res.json();
}

export async function createProject(project: { name: string; description: string; tags?: string[] }) {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(project),
  });
  if (!res.ok) throw new Error("Failed to create project");
  return await res.json();
}

export async function updateProject(
  id: string,
  project: { name?: string; description?: string; tags?: string[] }
) {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(project),
  });
  if (!res.ok) throw new Error("Failed to update project");
  return await res.json();
}

export async function deleteProject(id: string) {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Failed to delete project");
  return await res.json();
}

// Project Tags
export async function addProjectTag(projectId: string, tag: string) {
  const res = await fetch(`${API_URL}/projects/${projectId}/tags`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ tag }),
  });
  if (!res.ok) throw new Error("Failed to add tag");
  return await res.json();
}

export async function removeProjectTag(projectId: string, tag: string) {
  const res = await fetch(`${API_URL}/projects/${projectId}/tags/${encodeURIComponent(tag)}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error("Failed to remove tag");
  return await res.json();
}

export async function getProjectTags() {
  const res = await fetch(`${API_URL}/projects/tags`, { headers: headers() });
  if (!res.ok) throw new Error("Failed to get tags");
  return await res.json();
}
