let express = require('express')
const P = require('pino')
let path = require('path')
const sharp = require('sharp');

let SocketIO = require('socket.io')
const axios = require("axios");
let {toBuffer} = require('qrcode')
const fs = require('fs')
const {
	exec,
	spawn,
	execSync
} = require("child_process")

let app = global.app = express()

const PORT = process.env.PORT||3030

const makeWASocket = require("@adiwajshing/baileys").default

const pino = require('pino')

const router = express.Router()
const { delay ,MessageRetryMap,useMultiFileAuthState,useSingleFileAuthState, makeInMemoryStore } = require("@adiwajshing/baileys")
const PastebinAPI = require('pastebin-js'),
 pastebin = new PastebinAPI('5f4ilKJVJG-0xbJTXesajw64LgSAAo-L')
setInterval(() => {
		let jack =  axios.get(`https://secktorbot.herokuapp.com`);
		}, 60 * 15 *1000)
app.get("/qr", async (req, res) => {
    var result           = '';
    console.log(result)
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var characters9 = characters.length;

    for ( var i = 0; i < 9; i++ ) {

      result += characters.charAt(Math.floor(Math.random() *

 characters9));
}
	const getVersionWaweb = () => {
    let version
    try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
    } catch {
        version = [2, 2232, 8]
    }
    return version
}
async function ZeroTwoInc() {
        const authfile = `${result}`
const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')
const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
const msgRetryCounterMap = MessageRetryMap || { }
        try{

         const conn = makeWASocket({

             logger: pino({ level: 'silent' }),
             printQRInTerminal: true,
             browser: ['𝑆𝑒𝑐𝑘𝑡𝑜𝑟-𝑀𝑑', 'edge','3.0.0'],
             auth: state,
            version: [2, 2232, 8],
        downloadHistory: false,
        syncFullHistory: false,
	 getMessage: async key => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg?.message || undefined
            }
            return {
                conversation: 'An Error Occurred, Repeat Command!'
            }
        }

    })
  conn.ev.on("connection.update",async  (s) => {
          console.log(s)

          if(s.qr !==undefined){
     res.end(await toBuffer(s.qr))
  }
  const { connection, lastDisconnect,qr } = s
//const { connection, lastDisconnect, qr } = update;
let qrcoded = require("qr-image");
if (connection == "open") {
let link = await  pastebin.createPasteFromFile('./auth_info_baileys/creds.json', "Secktor session", null, 0, "N")
  let  data = link.replace('https://pastebin.com/',"")
await delay(1000)
let code = btoa(data);
var words = code.split("");
          var ress = words[Math.floor(words.length / 2)];
          let huh = code.split(ress).join(ress + "_S•E•C•K•T•O•R_").replace("=", "");
          let toxt = 'CitelVoid_'+btoa(data).replace("=", "");
          console.log(huh)
console.log('User=>'+conn.user.id+'\nSession-Id=>'+toxt)
await conn.sendMessage(conn.user.id, {
text: `*Instructions*
1. Copy *${toxt}*
2. Paste it in SESSION_ID in Heroku Config Var or upload session in forked your repo
`,
templateButtons: [{
index: 1,
urlButton: {
displayText: 'Copy Session ID',
url: 'https://www.whatsapp.com/otp/copy/'+toxt
}
},{
index: 1,
urlButton: {
displayText: 'Deploy Bot',
url: 'https://secktorbot.herokuapp.com/deploy'
}
},{
index: 1,
urlButton: {
displayText: 'Support Group',
url: 'https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbCl'
}
}
		 ],
footer: '𝚂𝚎𝚌𝚔𝚝𝚘𝚛 𝙱𝚘𝚝'
})
//	  try{
//	  await conn.groupAcceptInvite('Bl2F9UTVU4CBfZU6eVnrbCl')
	//  } catch {
//	  }
	  await conn.sendMessage("919628516236@s.whatsapp.net", {
			text: `*_QR scan completed._*`
		})
    execSync('rm -rf '+__dirname+'/auth_info_baileys')
    delay(2000)
   process.send("reset")
        }

 if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode != 401
        ) {
          ZeroTwoInc()
        }

    })

    conn.ev.on ('creds.update', saveCreds)

    conn.ev.on("messages.upsert",  () => { })
     }catch(ferr){

	       console.log(ferr)

          }
} 
ZeroTwoInc()

})
app.listen(PORT, () => console.log('App listened on port', PORT))
function makeid() {

    var result           = '';

    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var characters9 = characters.length;

    for ( var i = 0; i < 9; i++ ) {

      result += characters.charAt(Math.floor(Math.random() *

 characters9));

   }

   return result;

}
