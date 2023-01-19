import { NextApiRequest, NextApiResponse } from "next"

export const RoadmapRequest = async function(req: NextApiRequest, res: NextApiResponse)
{
  const auth = Buffer.from(process.env.ATTLASIAN_EMAIL + ':' + process.env.ATTLASIAN_API_KEY).toString('base64')
  const jqlQuery = `project=${process.env.ATTLASIAN_PROJECT} AND type=Epic`
  const apiUrl = `${process.env.ATTLASIAN_URL}/rest/api/3/search?jql=${encodeURIComponent(jqlQuery)}&fields=summary,status,priority,updated`

  try
  {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to retrieve EPIC issues (${response.status}): ${response.statusText}`)
    }

    const data = await response.json()
    const epicIssues = data.issues
    const parsedEpics = parseEpics(epicIssues)

    return res.status(200).json(parsedEpics)
  }
  catch (error: unknown)
  {
    return res.status(500).json({ message: (error as Error).message })
  }
}

function parseEpics(epicIssues: any[])
{
  const parsedEpics = epicIssues.map(issue => ({
    id: issue.key,
    title: issue.fields.summary,
    priority: issue.fields.priority.id,
    last_updated: issue.fields.updated,
    status: issue.fields.status.name
  }))

  const categories = Array.from(new Set(parsedEpics.map(epic => epic.status)))
  const issuesByStatus: Record<string, any[]> = {}

  categories.forEach(category => {
    const slug = category.toUpperCase().replace(/\s+/g, '_')
    issuesByStatus[slug] = parsedEpics.filter(epic => epic.status === category)
  })

  const categorizedEpics = categories.map(category => ({
    id: category.toUpperCase().replace(/\s+/g, '_'),
    name: category,
  }))

  return { categories: categorizedEpics, issues: issuesByStatus }
}

export default RoadmapRequest