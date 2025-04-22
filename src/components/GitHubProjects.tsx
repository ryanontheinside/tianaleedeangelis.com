import { GitHubRepo } from '@/types/github'
import { useEffect, useState } from 'react'

const REPOS = [
  'ryanontheinside/ComfyUI_RyanOnTheInside',
  'yondonfu/comfystream',
  'ryanontheinside/ComfyUI_RealtimeNodes'
]

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const promises = REPOS.map(repo => 
          fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
        )
        const results = await Promise.all(promises)
        setRepos(results)
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="block p-6 border rounded-lg animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {repos.map(repo => (
        <a key={repo.html_url}
           href={repo.html_url}
           className="block p-6 border rounded-lg hover:border-gray-400 transition-colors"
           target="_blank" 
           rel="noopener noreferrer">
          <h3 className="font-bold mb-2">{repo.name.split('/')[1]}</h3>
          <div className="text-sm text-gray-500 mb-4">{repo.name}</div>
          <p className="text-gray-600 mb-4">{repo.description}</p>
          <div className="text-sm text-gray-500">
            {repo.stargazers_count} stars • {repo.language}
          </div>
        </a>
      ))}
    </div>
  )
} 