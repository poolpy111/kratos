const config = {
    driver: "msnodesqlv8",
    server: 'DESKTOP-U69O675',
    database: 'emails_database',
    options: {
        instanceName: 'MSSQLNEWSERVER',
        trustedConnection: true,
    },
    port: 1433
}

module.exports = config;