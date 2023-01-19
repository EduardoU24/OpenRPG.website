import { NextApiRequest, NextApiResponse } from "next";

export const VanityRequest = async function (req: NextApiRequest, res: NextApiResponse) {
	const vanityAPIUrl = "https://api.codetabs.com/v1/loc/?github=OpenRPGApps/OpenRPG.client";
	try {
		const response = await fetch(vanityAPIUrl, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
		});

		if (!response.ok) {
			throw new Error(`Failed to retrieve code statistics from GitHub API (${response.status}): ${response.statusText}`)
		}

		const data: any = await response.json()
		return res.status(200).json(data)

	} catch (error: unknown) {
		console.error(error);
	}


	const baseAPIUrl = "https://api.github.com/repos/OpenRPGApps/OpenRPG.client";
	const APIUrl = baseAPIUrl + "/";
	
	const toResult: any = {
		"default": {},
		"languages": {},
		"contributors": {},
		"commits": {}
	}

	try {
		const response = await fetch(baseAPIUrl, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
		});

		if (!response.ok) {
			throw new Error(`Failed to retrieve code statistics from GitHub API (${response.status}): ${response.statusText}`)
		}

		const data: any = await response.json()
		toResult[`${'default'}`] = parseDefaultData(data)

	} catch (error: unknown) {
		console.error(error);
	}

  	const desiredAPIs = ["languages", "contributors", "commits"]
	for(let apiSuffix of desiredAPIs) 
	{
		try {
			const response = await fetch(APIUrl + apiSuffix, {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
			});

			if (!response.ok) {
				throw new Error(`Failed to retrieve code statistics from GitHub API (${response.status}): ${response.statusText}`)
			}

			const data: any = await response.json()
			console.log(data)
			toResult[`${apiSuffix}`] = data;


			return res.status(200).json(toResult);
		} catch (error: unknown) {
			console.error(error);
			return res.status(500).json({ message: (error as Error).message });
		}
  	}
}

function parseDefaultData(data: any)
{
  return {
    id: data.id,
    full_name: data.full_name,
    html_url: data.html_url,
    size: data.size,
    organization: data.organization.html_url
  }
}

export default VanityRequest;
