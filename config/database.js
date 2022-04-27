const mariadb = require('mariadb');

const pool = mariadb.createPool({
    connectionLimit: 10,
    host: 'https://databases-auth.000webhost.com/',
    user: '	id16564461_teixeira',
    password: 'Bouboule2002*',
    database: 'id16564461_portfolioteixeiradefreitas',
    port: '3306',
    
});

module.exports = pool;