module.exports = {
    devServer: {
        port: 8021,
        proxy: 'http://bichengxi.top:4000',
        // proxy: 'http://192.168.14.128:4000',
    },
    publicPath: './',
}
