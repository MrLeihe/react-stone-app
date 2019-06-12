
function setCookie(name, value, expire) {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expire)
    document.cookie = `${name}=${encodeURIComponent(value)}${expire ? '' : `;expires${exdate.toGMTString()}`}`
}

function getCookie(key) {
    if (document.cookie) {
        const cookies = document.cookie.split('; ')
        let i = 0, length = cookies.length
        for (; i < length; i++) {
            const cookieItem = cookies[i].split('=')
            console.log(cookieItem)
            if (cookieItem[0] === key) {
                return cookieItem[1]
            }
        }
        return null
    }
    return null
}

export { setCookie, getCookie }