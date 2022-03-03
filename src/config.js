const PORT = process.env.PORT || 8000

const connection = {
    connectionStringLoc: 'postgres://postgres:shohjahon25$@localhost:5432/restaurans',
    connectionStringEl: 'postgres://fmzvkvow:QrRuSaDjDqFsM6Zak_PAfUuS24A-RUUi@jelani.db.elephantsql.com/fmzvkvow',
}

module.exports = {
    PORT,
    connection
}