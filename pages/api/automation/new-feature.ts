import { NextApiRequest, NextApiResponse } from "next";

export const NewFeatureAutomation = async function (req: NextApiRequest, res: NextApiResponse) {

  if(req.headers.authorization !== `Bearer ${process.env.JIRA_WEBHOOK_AUTH_KEY}`)
    return res.status(404).json({ error: "Wrong Auth" })

  const issue = {
      id: req.body.key,
      title: req.body.fields.summary,
      description: req.body.fields?.description || '',
      status: req.body.fields.status.name
  }

  const baitMemes = [
      "https://media.discordapp.net/attachments/1081406734880489553/1081406875637121144/image.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081406857450618890/image.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081406837468958741/image.png",
      "https://media.discordapp.net/attachments/1081406410962776215/1081406734716899359/image.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081407060257812531/sooon.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081407193829609552/soon_meme_collection_640_04.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081407323806912602/image.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081408340325834792/image.png",
      "https://media.discordapp.net/attachments/1081406734880489553/1081408644953948180/image.png",
  ];
  let selectedBaitMeme = baitMemes[Math.floor(Math.random() * baitMemes.length)];

  const template = {
    "content": "\nA new feature for the OpenRPG Client (ORC) has been greenlit and is now In Development.\n__",
    "embeds": [
      {
        "title": `[${issue.id}] ${issue.title}`,
        "description": issue.description,
        "url": `https://openrpg.app/roadmap/${issue.id}`,
        "color": 14427903,
        "fields": [
          {
            "name": "Public Roadmap",
            "value": "[https://openrpg.app/roadmap](https://openrpg.app/roadmap)"
          },
          {
            "name": "Internal Jira",
            "value": `Dev Link: [${issue.id}](https://openrpgapps.atlassian.net/browse/${issue.id})`
          }
        ],
        "author": {
          "name": "OpenRPG Client Feature"
        },
        "image": {
          "url": selectedBaitMeme
        }
      }
    ],
    "username": "New Features Guy",
    "avatar_url": "https://media.discordapp.net/attachments/1081406734880489553/1081408967726596196/k58ry.png",
    "attachments": []
  }

	try {
		const response = await fetch(process.env.JIRA_TO_DISCORD_WEBHOOK_NEWFEATURE_01 as string, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(template),
		});

		return res.status(200).json({ message: "OK" });
	} catch (error: unknown) {
		console.error(error);
		return res.status(500).json({ message: "Error sending webhook to Discord" });
	}
}

export default NewFeatureAutomation;
