const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Monjan_Nick,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function NICK_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Monjan_Nick = Nick_Md({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Monjan_Nick.ev.on('creds.update', saveCreds)
			Qr_Code_By_Monjan_Nick.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Malvin_King.sendMessage(Qr_Code_By_Malvin_King.user.id, { text: '' + b64data });
	
				   let MONJAN_NICK_TEXT = `
┏━━━━━━━━━━━━━━
┃𝐍𝐈𝐂𝐊-𝐌𝐃 SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ 𝐍𝐈𝐂𝐊-𝐌𝐃 ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vac8SLY6d7CAFndv3Z
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/918848636819
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/monjan-nick/NICK-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@Nick-Lofi-555 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 NICK-MD_`
	 await Qr_Code_By_Monjan_Nick.sendMessage(Qr_Code_By_Monjan_Nick.user.id,{text:NICK_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Nick_Md.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					NICK_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await NICK_MD_QR_CODE()
});
module.exports = router
