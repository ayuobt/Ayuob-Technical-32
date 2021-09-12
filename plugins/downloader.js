const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Instagram Downloader"
const NEED_WORD = "Must Enter a link"
const FBDESC = "Facebook Downloader"
const LOADING = "Downloading..."
const NOT_FOUNDFB = "Not Found On Facebook"
const CAPTION = "Caption"

Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: false, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Post Downloading..."))

    await axios
	.get(`https://api.xteam.xyz/dl/ig?url=${userName}&APIKEY=ab9942f95c09ca89`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {quoted: message.data}, {
          caption: "Copyright © 2021 | Baala"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {
          caption: "Copyright © 2021 | Baala"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Please enter Instagram link ")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
	.get(`https://api.xteam.xyz/dl/fb?url=${userName}&APIKEY=ab9942f95c09ca89`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {
          caption: "Copyright © 2021 | Baala"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)
