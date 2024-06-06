import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "test"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "test"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "test",
            subtitle: "test",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"قائمه\",\"sections\":[{\"title\":\"قسم المطور\",\"highlight_label\":\"للمطور فقط\",\"rows\":[{\"header\":\"قائمه #التحكم\",\"title\":\"استدعاء قسم #المطور\",\"description\":\"استدعاء قسم #المطور\",\"id\":\".التحكم\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"المطور\",\"id\":\".المطور\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"قناه البوت\",\"url\":\"https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B\",\"merchant_url\":\"\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(mboton)$/i

export default handler
