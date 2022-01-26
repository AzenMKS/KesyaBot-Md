// Edit Kalau Tidak Sesuai

// Message Salah Command
exports.wrongFormat = (prefix) => {
    return `Format Salah ❎ Silakan Cek Cara Penggunaan Di *${prefix}allmenu*`
}

// Message Salah Url
exports.notNum = (q) => {
    return `"${q}", Bukan Angka!`
}

// Message Saat Fitur Error
exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}