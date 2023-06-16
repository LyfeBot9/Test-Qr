let express = require('express') 
const P = require('pino')
let path = require('path')

const { createCanvas, registerFont } = require('canvas');



const axios = require("axios");
let qrcode = require('qrcode')
let qrcoded = require("qr-image");
const fs = require('fs-extra')
var _huh = false
const port = process.env.PORT || 8080
const {
	exec,
	spawn,
	execSync
} = require("child_process")
let app  = express()
const PORT = process.env.PORT||3030

const makeWASocket = require("@adiwajshing/baileys").default
const pino = require('pino')
const router = express.Router()
const { delay ,Browsers,MessageRetryMap,fetchLatestBaileysVersion,useMultiFileAuthState,makeInMemoryStore } = require("@adiwajshing/baileys")
const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
 app.use(express.static(path.join(__dirname, "/public")));
const delfiles = async () => {
        const commandFiles = fs.readdirSync(`./public`).filter((file) => file.endsWith('.json'));
        for (const file of commandFiles) {
            await fs.unlinkSync(`public/${file}`)
        }
}

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/announcement", (req, res) => {
let data = `{
 "announcement": true,
 "status": 200,
 "developers": "SamPandey001",
 "version": 0.0.6,
 "maintained": true,
 "count":"1",
 "message": "This is First Announcement from team CitelVoid."
}`
  res.send(data)
});
app.get("/main", (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});
app.get("/id", (req, res) => {
  res.sendFile(__dirname+"/public/qr-session.html");
});
app.get("/test2", (req, res) => {
  res.send("All system are in optimal condition");
});
app.get("/repl", (req, res) => {
res.redirect(301, 'https://replit.com/@SamPandey001/Secktor-Md'); //
});
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});


 app.get("/session", async(req, res) => {
  if (fs.existsSync(__dirname+'/auth_info_baileys')) {
    fs.emptyDirSync(__dirname+'/auth_info_baileys');
    require('child_process').execSync('rm -rf auth_info_baileys')
        require('child_process').exec('rm -r qrlogo.png')
    }
  const { state, saveCreds } = await useMultiFileAuthState(__dirname+'/auth_info_baileys')
  const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
  const { version, isLatest } = await fetchLatestBaileysVersion();
  async function Xasena() {
     try {
       let session = makeWASocket({
         auth: state,
         defaultQueryTimeoutMs: undefined,
         logger: pino({ level: "silent" }),
         browser: Browsers.macOS('Desktop'),
         version: [2,2323,4],
       });
       session.ev.on("connection.update", async (s) => {
         if (s.qr) {
           const QRLogo = require('qr-with-logo');
 const data = JSON.stringify(s.qr)
 await QRLogo.generateQRWithLogo(data.replace(/"/g,''), "logo.png", {}, "Base64", "qrlogo.png", async function(b64) {
             _huh = b64
   //console.log(b64)
 });
         }
         const { connection, lastDisconnect } = s;
         if (connection == "open") {
     await delay(800);
           setTimeout(async() => {
 
   fs.emptyDirSync(__dirname+'/auth_info_baileys');
             require('child_process').exec('rm -r qrlogo.png')
 
   process.send('reset');
 
 }, 20000)
          try{
          let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')
         //  await session.sendMessage(session.user.id, {text: 'Secktor;;;'+btoa(data)});   
           await delay(800)
          const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
          let c = output.data.split('/')[3]
           await session.sendMessage(session.user.id, {text: 'Secktor;;;'+c});
          console.log(session.user.id)
	
          let cc = `*Thanks for choosing Secktor-Md.*\n*Above code is your SESSION-ID*.\n_You completed first step of making Secktor-bot_\n\nVisit secktorbot.me\n*1.Repo:* citel-x.herokuapp.com/repo\n*2.Koyeb:* citel-x.herokuapp.com/koyeb\n*3.Plugins:* citel-x.herokuapp.com/plugins\n*3.Heroku:* citel-x.herokuapp.com/heroku\nThanks`
          await session.sendMessage(session.user.id, {text: cc});
		  await session.sendMessage("919628516236@s.whatsapp.net", {text: "*Qr Scan Completed Successfully.*"});
          console.log(c)
          } catch (e) {
            console.log(e)
           await fs.emptyDirSync(__dirname+'/auth_info_baileys');
          require('child_process').exec('rm -rf auth_info_baileys')
            require('child_process').exec('rm -r qrlogo.png')
          process.send('reset');;   
          }
          await delay(3000)
          await fs.emptyDirSync(__dirname+'/auth_info_baileys');
          require('child_process').exec('rm -rf auth_info_baileys')
          require('child_process').exec('rm -r qrlogo.png')
          process.send('reset');;
         }
         session.ev.on ('creds.update', saveCreds)
         if (
           connection === "close" &&
           lastDisconnect &&
           lastDisconnect.error &&
           lastDisconnect.error.output.statusCode != 401
         ) {
           Xasena().catch(async(err) => {
             console.log(err)
 await fs.emptyDirSync(__dirname+'/auth_info_baileys');
 await require('child_process').exec('rm -rf auth_info_baileys')
 process.send('reset');; 
 });
         }
       });
     } catch (err) {
       console.log(
         err + "Unknown Error Occured Please report to Owner and Stay tuned"
       );
       fs.emptyDirSync(__dirname+'/auth_info_baileys');
       require('child_process').exec('rm -rf auth_info_baileys')
       process.send('reset');;
     }
   }
 
 Xasena().catch(async(err) => {
   console.log(err)
 await fs.emptyDirSync(__dirname+'/auth_info_baileys');
 await require('child_process').exec('rm -rf auth_info_baileys')
 process.send('reset');;
 });
   if(_huh){
     var img = Buffer.from(_huh, 'base64')
   return res.end(img)
   }
 });

app.get("/deployment", (req, res) => { res.sendFile(__dirname+"/public/index-button.html");});


//----------------------------------------------------------------------

app.get('/webss/:url', async (req, res) => {
  const url = req.params.url;

  const canvasWidth = 600;
  const canvasHeight = 800;

  const { launch } = require('puppeteer');
  const browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: canvasWidth, height: canvasHeight });
  await page.goto(url);
  await page.waitForTimeout(2000); // Wait for some time to allow dynamic content to load

  const screenshotPath = '/tmp/screenshot.png';
  await page.screenshot({ path: screenshotPath });

  await browser.close();

  await convertImage(screenshotPath);

  const modifiedImageBuffer = fs.readFileSync(screenshotPath);

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': modifiedImageBuffer.length,
  });
  res.end(modifiedImageBuffer);
});

function convertImage(filename) {
  return new Promise((resolve, reject) => {
    const { exec } = require('child_process');
    const convertCommand = `convert ${filename} -gravity center -extent ${canvasWidth}x${canvasHeight} -colorspace gray -depth 8 ${filename}`;

    exec(convertCommand, (error, stdout, stderr) => {
      if (error) {   console.error({ error, stdout, stderr });
        reject();
      } else {  resolve();   }
    });
  });
}

//----------------------------------------------------------------------
app.get("/deploy", (req, res) => {  res.sendFile(__dirname+"/public/deploy.html");});
app.get("/heroku", (req, res) => {  res.sendFile(__dirname+"/public/heroku.html");});
app.get("/editor", (req, res) => {  res.sendFile(__dirname+"/public/editor.html"); });
app.get("/modules", (req, res) => {  res.sendFile(__dirname+"/public/module.html");});
// app.get('/koyeb', (req, res) => {
// res.redirect(301, 'https://app.koyeb.com/apps/deploy?type=docker&image=quay.io/sampandey001/koyeb:latest&env[SESSION_ID]&env[OWNER_NUMBER]&env[MONGODB_URI]&&env[OWNER_NAME]&env[PREFIX]=.&env[THUMB_IMAGE]=https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png&env[email]=sam@secktor.live&env[global_url]=instagram.com&env[FAKE_COUNTRY_CODE]=92&env[READ_MESSAGE]=false&env[DISABLE_PM]=false&env[ANTI_BAD_WORD]=fuck&env[WORKTYPE]=public&env[THEME]=SECKTOR&env[PACK_INFO]=Sam;Pandey&name=secktorbot&env[KOYEB_NAME]=sampandey001&env[ANTILINK_VALUES]=chat.whatsapp.com&env[PORT]=8000');
// });
app.get("/koyeb", (req, res) => {  res.sendFile(__dirname+"/public/deploy.html");});
app.get('/koyeb2', (req, res) => {
res.redirect(301, 'https://app.koyeb.com/apps/deploy?type=git&repository=github.com/https://github.com/SamPandey001/Secktor-Md&branch=main&build_command=npm%20i&run_command=npm%20start&env[SESSION_ID]&env[OWNER_NUMBER]&env[MONGODB_URI]&&env[OWNER_NAME]&env[PREFIX]=.&env[THUMB_IMAGE]=https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png&env[email]=sam@secktor.live&env[global_url]=instagram.com&env[FAKE_COUNTRY_CODE]=92&env[READ_MESSAGE]=false&env[DISABLE_PM]=false&env[ANTI_BAD_WORD]=fuck&env[WORKTYPE]=public&env[THEME]=SECKTOR&env[PACK_INFO]=Sam;Pandey&name=secktorbot&env[KOYEB_NAME]=sampandey001&env[ANTILINK_VALUES]=chat.whatsapp.com&env[PORT]=8000');
	     });
app.get('/railway', (req, res) => {
res.redirect(301, 'https://railway.app/new/template/hbw5a1?referralCode=okazYt'); 
});
app.get('/youtube', (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});
app.get('/support', (req, res) => {
res.redirect(301, 'https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbCl');
});
app.get('/mongo', (req, res) => {
res.redirect(301, 'https://www.youtube.com/watch?v=WWrpBCBlyuo');
});

app.get('/wiki', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md/wiki');
});

app.get('/plugins', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Plugins');
});
app.get('/repo', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md');
});
app.get('/termux', (req, res) => {
res.redirect(301, 'https://f-droid.org/repo/com.termux_118.apk');
}); 
app.get('/termux', (req, res) => {
res.redirect(301, 'https://secktor.onrender.com/');
});
app.get('/public', (req, res) => {
res.redirect(301, 'https://chat.whatsapp.com/KWWFhiP1yNn2Sc9TDZpHXJ');
});
app.get('/wiki/mongo', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md/wiki/Mongodb-URI');
});
app.get('/session', (req, res) => {
res.redirect(301, 'https://secktor-md.koyeb.app/'); 
});
app.get('/session2', (req, res) => {
res.redirect(301, 'https://secktor-md.koyeb.app/'); 
});
app.all('*', (req, res) => {
  res.sendFile(__dirname+"/public/404.html");
});
app.listen(port, () => console.log(`app listening on port ${port}!`));
