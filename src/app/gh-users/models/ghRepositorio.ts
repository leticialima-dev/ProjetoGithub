export interface GhRepositorio extends Array<GhRepositorio>{     
    name: string
    description: string
    html_url: string
    forks_count: number
    updated_at: string
    language: string
    stargazers_count: number
}