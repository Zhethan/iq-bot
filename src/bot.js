const fs = require('fs')
const Discord = require('discord.js')
const bot = new Discord.Client()

const config = JSON.parse(fs.readFileSync('config/config.json'))

bot.on('ready', function () {
  console.log('hi nerd')
})

bot.on('message', function (msg) {
  if (msg.content.toLowerCase() === 'thomas') msg.channel.send('is gay lol')

  if (msg.content.toLowerCase() === '!iq') {
    if (msg.author.id === '160890312955265025') {
      console.log('THOMAS DETECTED')
      msg.channel.send(msg.author.toString() + ', your IQ is: ' + (Math.floor(Math.random() * 10)))
    } else {
      msg.channel.send(msg.author.toString() + ', your IQ is: ' + (Math.floor(Math.random() * 200)))
    }
  }

  if (msg.content.toLowerCase() === 'gregory') msg.channel.send('only has 80 wpm lmao')

  if (msg.content.toLowerCase() === 'just build lol') msg.channel.send('LOOOOOOOOOOOOOOOOOOOOOOOOOOL')

  if (msg.content.toLowerCase() === '?') msg.channel.send('🤔')

  if (msg.content.toLowerCase() === '??') msg.channel.send('🤔')

  if (msg.content.toLowerCase() === '???') msg.channel.send('🤔')

  if (msg.content.toLowerCase() === 'omegalul') {
    msg.channel.send({
      files: [{
        attachment: __dirname + '/image2.png',
        name: 'omegalul.png'
      }]
     // {
      //  attachment: __dirname + '/image2.png',
      //  name: 'omegalul2.png'
      // }]
    })
  }
  if (msg.content.toLowerCase() === '*dab*') msg.channel.send('thomas, never do that again')
})

bot.login(config.token)
