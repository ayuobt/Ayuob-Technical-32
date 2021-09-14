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
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/images1/Robotech-Space-Backgrounds.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ඏ♚๖ۣۜ٘شَـــیٌـــط٘ــاَن༻࿌*
Cᵣₑₐₜₒᵣ : ᗷᗩᗩᒪᗩ 
þår†ñêr : ¥å§ïr §ïål
𝒫𝒶𝓇𝓉𝓃𝑒𝓇 : 𝑀𝒶𝒻𝒾𝒶 𝒜𝓃𝓊𝓂
𝒫𝒶𝓇𝓉𝓃𝑒𝓇 : 𝐸𝓋𝒾𝓁 𝒵𝑒𝑒𝓂𝒾
Whatsapp : +92 3207371452
Facebook : https://facebook.com/painduno1
Youtube : https://youtube.com/channel/UCukP4xTkzkJh_XOaLXZ4SZA


`}) 

}));
