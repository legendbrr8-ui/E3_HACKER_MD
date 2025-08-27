const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BXRjN3eG9QeFFCSXl0YjVvVmkvOG9MdTc0UFZwSi90QUZQWTRSUmpYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0M3RDFXSi9qeUtyMndrN0hDUklzQ1B3cmNHWHVKbkVka3dxU01iL1MzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR21DYmtYSUkwTFRhQWpxUkgvS3Z6QzJkN0FENjlVTWpvbVBGQkZlWkhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWWR1d3NzUFZYN2pvajJKbXBDcjAwTFpTY003YkZxV0tDbThHaWhxK1I4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EcFdFdUVDVWZITmlVaWVyU1ZZdmpSdlN2V3dybVVyalFKZ0pURU1RVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhrNWFvQnYxM1gwNGpDYUc2Y0RvcUh4UDllMTRwQ0drRkFiN2k5eXBmVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01mRjhxeFhZa3VFdjFDMHU1dXljN1RjSGlwOGxHakhoa3RFakdTQTZWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3NBUGVFcHR1b2syRnJubnAyRGhQckJ2SUd1b0IvVlB0TUlJNlNyVkJ3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU3TGdiNEd4QlJRWHgxajFqZWJLQXdabkJKRlZBN2hNYUNTS005Vm4wZ21HdU1DTjNPYWlkeTBnV204ekdsR01MVytrWGxjaWVVcjZRUnUyMzVsaGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6Im5XTjFNTTNRQlk2aUY1NWs2c0NJZkpZTDVKN2Z5MU9wZTFwd0xYWjFiVXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlQ4RDFON05UIiwibWUiOnsiaWQiOiIzOTM3ODAzMTMyODM6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NTIyNTY1Njg0NDUwODoxMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09pczdkWUNFTHVkdWNVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFhRmkyTi95YWw4YitjTmN4VE54QWZZV2JLQ0hqM2p0YWN6WUd5dTQvem89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxPUmVOOEQrOG5zR0xxWkE2WDk5NmJBWStyUGdXQjlnQlFiaFB5bXlSemY2dEh2Q3pBYk5DSDh2RW9Eayt5OG0xVWtEWTl5dnF0eEpaU1hxUTZkVENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJNWxSaFlCR3VzU2NUaE0rQkYyRjhwUTlicm5ibW5IZEdqL2g1WU9ITUQxZHV3UkZuY2NLN0NPdUxGWmNDbVVRTWZraDE2TFRaRU5LMFBjTXJLQWhqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjM5Mzc4MDMxMzI4MzoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbWhZdGpmOG1wZkcvbkRYTVV6Y1FIMkZteWdoNDk0N1duTTJCc3J1UDg2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYyNTM4ODUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQclAifQ==wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEFpL09zc2FaQjF0c2YxYnFiNE1yREpBSFFud1NkeHdhVWF5eTdRQkxuRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQlV6U01vWEVodlEweXlqVU5ldVRRbC91MWViVTJDcGgwbTVoM0Rka1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJak13LzVSTmxlY0E3ZjNsdmM2Nk5KOEF1OUR2djRIYXRlUFdjdEltKzE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IVktkT0JFNXFmWWR2Q0ZIK2J1SnBSQVRVK2lkZC9XZnM2bWRGMGhUSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhYUEhWb2h0ZVY5Z1p6QmovajZuNGRVb2xSYWgxVjU4MEZzRHRSM0hEakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNrSUFrbi85UUF0VTFFM2xFKytOOGJGTjJ5TWR5dHZEeERkRUk4WDNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2ljS2htMmZpRkhvSmwxWWpZTG1VdHUzc2d3UFF2YWhjQ0FBMVJxd0hSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBeENXRC95MXZHazlmN2htWVFzRWR3MFZUVXA5M2NYR2pMekdoQ0dxOFNwYVBSaFB6VXd4ajkyY2tncnZWL24xdTFydUM3eVN4SExvMVpRcGd3c0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJVYk1ZOCtQNEYrWkJYTTVmbkE1WHJ0RUNTMlJTRFdscHZtYTdDNVlsdFpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDEzMTI4MzE5NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEUwMkQ4MkYwQzQzMzZFRkFENjk4QkFDQThCMThBNjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTgwMzM2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTFAySktDQkMiLCJtZSI6eyJpZCI6Ijg4MDEzMTI4MzE5NTE6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0ODE1NTM2NjY3ODcyMDo0QGxpZCIsIm5hbWUiOiJCIEEgRCBTIEggQSBIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL1ZnZHdFRU9QZG5jVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXbjg4eUsvNTU2Ym8zNnlNQ1RoaDAyUjlSTGQzVE84dThIUHJIZ2hJZ0hJPSIsImFjY291bnRTaWduYXR1cmUiOiIzQ3JrS1lobFN2QXVjU2JnUENISHVralpOay9UaUpRV25uTDJaTUhtbFVMUmFGSXA2bUZua3ppOSt2Q1pvWjZOKzZ3blJTOGJEenhGTG9JZ2lKd1ZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXliN3dNQURwM1o3eUZiZ1R2UW1WcnhUN1VpQ3VYcUFtSjZuVHhWY29jMk1ONEZnNnVxZFZsVTN1Y21mMUhYWGQwVDhEWlJHeFd3ZHRDTkEzcS9UQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4ODAxMzEyODMxOTUxOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnAvUE1pditlZW02TitzakFrNFlkTmtmVVMzZDB6dkx2Qno2eDRJU0lCeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1ODAzMzY3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURlZCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
