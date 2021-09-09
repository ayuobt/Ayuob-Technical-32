const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'song', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\Ruko zara Sabar karo\n";
r_text[1] = "Please wait...";
r_text[2] = "Devil says i love you 😘";
r_text[3] = "";
r_text[4] = "hi, how are you";
r_text[5] = "Bade Harami ho Beta..";
r_text[6] = "Paindu ho paindu oh very good and how do you do😂🤣";
r_text[7] = "Don't Angry me ";
r_text[8] = "\n Main jo bolta hoon wo main karta hoon \n";
r_text[9] = "Sanu v le chal naal ve";
r_text[10] = "Tu baaz aaja tu bara raam maut marna";
r_text[11] = "do you know who is my creator..? its none other than baala";
r_text[12] = "Chitta Chola seeve darzi nahi bulaenda dhole di marzi";
r_text[13] = "Naino ki jo baat naina jaane hain";
r_text[14] = "I am coming";
r_text[15] = "hi.. ?";
r_text[16] = "Don't under estimate the power of a common man..?";
r_text[17] = "\n Oh teri..?";
r_text[18] = "mera naam hai chinna swami muttu swami venu gopal aiyyar";
r_text[19] = "\n Oh keee haaaaal aee theeek oooo naa..\n ";
r_text[20] = "The coefficient's of linear expansions is the position of Haemoglobin in the atmosphere. But Why? Full Many gem of purests serene lay underneath the unfathomed ocean's unblossomeds ! But why? But why";
r_text[21] = "Menu kaala chashma jachda ae gory mukhtre tey😎\n\n";
r_text[22] = "Ab meri koi zindagi nahi \n\n ab bhi tum meri zindagi ho kia";
r_text[23] = "Pyar ko hum ne jaa baja dekha ";
r_text[24] = "\nI love you\n";
r_text[25] = "\n spider man spider man tu ne churaya mere dil ka chain \n";
r_text[26] = "\nAaah thoo\n";
r_text[27] = "\nBeedi jalayi le jigar se piya jigar maa badi aag hai\n";
r_text[28] = "\nAa raha hoon main zindagi aa raha hoon main zindagi aa rha hoon main…\n";
r_text[29] = "\nKi aakh ditta ee?\n";
r_text[30] = "pyar mohabat ki baat hum se naa kro saahib dil toota hai.\n       -Baala";
r_text[31] = "My phone number is 0900 786 01 telefun telefun"; 
r_text[32] = "Saiyyan dekha mujh ko aise main pani pani ho gayi";
r_text[33] = "Ye dunya mc thi mc hai or mc hi rahegi";
r_text[34] = "Hagg 💩 diya literally hagg diya";
r_text[35] = "Dunya chand pe pohnch gyi aap abhi whatsapp pe bethe ho";
r_text[36] = "Gali gali mein shor hai poora tabbar chor hai ";
r_text[37] = "Tabdili aa nahi rahi tabdili aa gayi hai";
r_text[38] = "Feelings on fire";
r_text[39] = "Abba jo the hamare wo harmoniyam bajate the";
r_text[40] = "Abba Jabba Dabba";
r_text[41] = "Twinkle Twinkle Little Star";
r_text[42] = "Ik ter pyar baqi dunya bekaar je tu bnya shikariyan de waste te  aa ja yaar";
var i = Math.floor(43*Math.random())

await message.sendMessage(r_text[i]);

}));
