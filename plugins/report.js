/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'report ?(.*)', fromMe: true, desc: Lang.REPORT}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grp = await message.client.groupMetadata(message.jid);
            var  jids  =  [ ] ;
            msg = '';
            grp['participants'].map(async (uye) => {
                if  ( and . isAdmin )  {
                    msg  + =  '@'  +  and . id . split ( '@' ) [ 0 ]  +  '' ;
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });

            var ID = Math.random().toString(36).slice(2);

            await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grp = await message.client.groupMetadata(message.jid);
            var  jids  =  [ ] ;
            msg = '';
            grp['participants'].map(async (uye) => {
                if  ( and . isAdmin )  {
                    msg  + =  '@'  +  and . id . split ( '@' ) [ 0 ]  +  '' ;
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });

            var ID = Math.random().toString(36).slice(2);

            await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.REASON + `${match[1]}` + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'report ?(.*)', fromMe: false, desc: Lang.REPORT}, (async (message, match) => {
        if (match[1] == '' && message.reply_message) {
            let grp = await message.client.groupMetadata(message.jid);
            var  jids  =  [ ] ;
            msg = '';
            grp['participants'].map(async (uye) => {
                if  ( and . isAdmin )  {
                    msg  + =  '@'  +  and . id . split ( '@' ) [ 0 ]  +  '' ;
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });

            var ID = Math.random().toString(36).slice(2);

            await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grp = await message.client.groupMetadata(message.jid);
            var  jids  =  [ ] ;
            msg = '';
            grp['participants'].map(async (uye) => {
                if  ( and . isAdmin )  {
                    msg  + =  '@'  +  and . id . split ( '@' ) [ 0 ]  +  '' ;
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });

            var ID = Math.random().toString(36).slice(2);

            await message.client.sendMessage(message.jid,Lang.R_WORD + Lang.ID_WORD + ID + '\n' + Lang.BR + '\n' + Lang.USER + '@' + message.reply_message.jid.split('@')[0] + '\n' + Lang.BR + '\n' + Lang.REASON + `${match[1]}` + '\n' + Lang.BR + '\n' + Lang.END , MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
        }
    }));
}
