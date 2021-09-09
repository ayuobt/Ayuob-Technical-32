Amdi.applyCMD({ pattern: 'getpack ?(.*)', fromMe: LOL, desc: Lang.APK_DESC,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await QueenAmdi.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/playstore?apikey=' + apikey.key + `&query=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Name : ${x.title}\n`
        ini_txt += `💵 Price : ${x.priceText}\n`
        ini_txt += `👨🏻‍💻 Developer : ${x.developer}\n`
        ini_txt += `⚙️ Playstore Link : ${x.url}\n`
        ini_txt += `📁 Package name : ${x.appId}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ Queen Amdi Search Engine ❖*\n' + Lang.PSTORE + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})

/* WORKING IN PROGRESS
