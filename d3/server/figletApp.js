const figlet = require('figlet');

const getFunText = () => {
    return figlet.textSync('Shtivica!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}

module.exports.getFunText = getFunText;