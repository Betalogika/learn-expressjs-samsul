export const Login = (req, res) => {
    var username = req.query.username
    var password = req.query.password

    if (username == 'samsul' && password == 'samsul') {
        const data = {
            'id': 1,
            'username': username,
            'password': password,
            'about': 'samsul jomblo akut'
        }
        res.json({
            "Message": "Successfully Login",
            "data": data,
            "token": "K,jmH'4xi|{7.3%9aK3$``kxc^^FR$Ttsf5>li[(0g4dX~'!0x5yY3C$WhQ?^#u"
        })
    } else {
        res.json({
            "Message": "Failed Login",
            'data': {
                'field': 'username atau password anda salah'
            }
        })

    }
}

export const Register = (req, res) => {
    res.json({ "message": "halaman Register" })
}