/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * 
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
*/

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))

    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner}`,`${setting.nomerowner}`]
    global.packname = `${setting.namaowner}`
    global.author = `ยฉ ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = 'โญ'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: 'Fitur Khusus Admin Group! ๐คจ',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu! ๐',
    owner: 'Fitur Khusus Owner Bot Tod ๐ ',
    group: 'Fitur Digunakan Hanya Untuk Group! ๐',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done Jangan Lupa Subrek YT MAUL BOTZ',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
