const Discord = require("discord.js");
const client = new Discord.Client();
const Canvas = require("canvas");
const jimp = require('jimp');
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'pinssssssssssssssssssg') {
    msg.reply('Pong!');
  }
});


 //npm install canvas ==save
const canvas = ('canvas');
client.on('guildMemberAdd', member => {

     if (member.guild.id === "368321690796687370") {
    

    const w = ['imgs/w6.jpg','imgs/w4.jpg','imgs//w3.jpg','imgs/w2.jpg']

        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".jpg" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //wl
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
ctx.fillText(`${member.user.username}` , 205, 153);
ctx.fillText("اهلا بك في سيرفرنا " , 80, 175);
ctx.fillText("انت العضو رقم" + `${member.guild.memberCount}`, 280, 180);

client.channels.get("368739740545187842").sendFile(canvas.toBuffer())
client.channels.get("368739740545187842").send(`Welcome ${member} To __${member.guild.name}__ Server Members Now __${member.guild.memberCount}__`)



})
})

}
});



client.login(process.env.BOT_TOKEN)
