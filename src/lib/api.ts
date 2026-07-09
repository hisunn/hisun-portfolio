import { Project } from '@/types/content'
import { projects as fallbackProjects } from '@/lib/data'

const API_URL = import.meta.env.VITE_API_URL ?? ''

/**
 * Fetch projects from the Spring Boot API; fall back to bundled
 * content so the site works before the backend is deployed.
 */
export async function fetchProjects(): Promise<Project[]> {
  if (!API_URL) return fallbackProjects
  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) throw new Error(`API responded ${res.status}`)
    const body = (await res.json()) as { data: Project[] }
    return body.data.length ? body.data : fallbackProjects
  } catch {
    return fallbackProjects
  }
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function sendContact(payload: ContactPayload): Promise<void> {
  if (!API_URL) throw new Error('API not configured')
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`API responded ${res.status}`)
}
