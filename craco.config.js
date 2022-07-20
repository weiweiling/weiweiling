const path = require('path')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'assets':resolve('src/assets'),
            'common':resolve('src/common'),
            'components':resolve('src/components'),
            'network':resolve('src/network'),
            'views':resolve('src/views'),
        }
    }
}
