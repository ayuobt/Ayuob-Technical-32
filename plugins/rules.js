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

Asena.addCommand({pattern: 'rules', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/10/Avengers-Iphone-Full-HD-Wallpaper.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Baala*
Group Rules
1. No links 
2. Selling anything is not allowed
3. Porn videos not allowed
4. Totey mang kr ya bhej kr sharminda naa hon.
5. Gaali se parhez krein
6. Admins ko private message krne se thora parhez karein
7. Bot ko ziada ajeeb commands liye use naa krein.
1 bhi rule ki khilaf warzi pr foran group se ban.
`}) 

}));
