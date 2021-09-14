/* Copyright (C) 2021 Baala
CODDED Baala
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Pikachu
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://media4.giphy.com/media/XfzD4PfNXCrNvZ4rAy/giphy.webp?cid=6c09b952e075f6c5de8f09a3319632da4d497eac9337f871&rid=giphy.webp&ct=g";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.gif, {mimetype: Mimetype.gif, caption: `*Baala*
owner name : *Baala*
Partners : YasirSial : EvilZeemi *
*Youtube : https://youtube.com/channel/UCukP4xTkzkJh_XOaLXZ4SZA
*githublink :      https://github.com/itxammy/pikachu*

`}) 

}));
