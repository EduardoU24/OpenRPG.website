import { NextApiRequest, NextApiResponse } from "next"

export const IssueRequest = async  function(req: NextApiRequest, res: NextApiResponse)
{
  const { id } = req.query
  const auth = Buffer.from(process.env.ATTLASIAN_EMAIL + ':' + process.env.ATTLASIAN_API_KEY).toString('base64')
  const apiUrl = `${process.env.ATTLASIAN_URL}/rest/api/2/issue/${id}`

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

    return res.status(200).json(parseEpic(data))
  }
  catch (error: unknown)
  {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}

function parseEpic(issue: any)
{
  return {
    id: issue.key,
    title: issue.fields.summary,
    description: issue.fields.description || '',
    priority: issue.fields.priority.id,
    priority_icon: issue.fields.priority.iconUrl, 
    last_updated: (new Date(issue.fields.updated)).toLocaleString(),
    status: issue.fields.status.name
  }
}

function parseDescription(description: any): string {
  if (!description || !description.content) {
    return '';
  }

  let parsedDescription = '';
  description.content.forEach((element: any) => {
    if (element.type === 'text') {
      parsedDescription += element.text;
    } else if (element.type === 'hardBreak') {
      parsedDescription += '\n';
    }
  });

  return parsedDescription;
}


export default IssueRequest