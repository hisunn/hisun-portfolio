import { useQuery } from '@tanstack/react-query'
import { fetchProjects } from '@/lib/api'
import { projects as fallbackProjects } from '@/lib/data'

export function useProjects() {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 10,
    placeholderData: fallbackProjects,
  })
  return data ?? fallbackProjects
}
