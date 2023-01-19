import { NextApiRequest, NextApiResponse } from "next";

export const JiraRedirectedAutomation = async function (req: NextApiRequest, res: NextApiResponse) {

    const jiraData = req.body.issue; // assuming the Jira data is passed in the request body

    const payload_body = {
        "content": "Hey, a new Epic feature (Jira things) has been added to the To-Do list.\nThis means the feature was approved and it will be developed.\n\nFor more information checkout the [roadmap website](https://openrpg.app/roadmap).\n_ _",
        "embeds": [
            {
                "title": jiraData.key + " - " + jiraData.fields.summary,
                "description": jiraData.fields.description,
                "url": "https://openrpg.app/roadmap",
                "color": 15423743,
                "fields": [
                    {
                        "name": "Assignee",
                        "value": jiraData.fields.assignee.displayName,
                        "inline": true
                    },
                    {
                        "name": "Priority",
                        "value": jiraData.fields.priority.name,
                        "inline": true
                    }
                ],
                "author": {
                    "name": "Automated Announcement"
                }
            }
        ],
        "username": "OpenRPG Project Management",
        "avatar_url": "https://cdn.discordapp.com/attachments/1080682810685272084/1080688568768417862/image.png",
        "attachments": []
    }

	try {
		const response = await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload_body),
		});

		return res.status(200).json({ message: "Webhook sent to Discord!" });
	} catch (error: unknown) {
		console.error(error);
		return res.status(500).json({ message: "Error sending webhook to Discord" });
	}
}

export default JiraRedirectedAutomation;
