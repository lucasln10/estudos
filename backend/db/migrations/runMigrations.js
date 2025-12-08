const db = require('../conection/db.js');

async function runMigration() {
    const sql = `
        CREATE TABLE IF NOT EXISTS produtos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        preco VARCHAR(255) NOT NULL UNIQUE,
        quantidade VARCHAR(255) NOT NULL
        );
    `;
    
    try {
        const [result] = await db.query(sql);
        console.log("tabela produtos criada com sucesso!!!!!", result);
    } catch (error) {
        console.error("falha ao criar tabela produtos", error);
    } finally {
        process.exit();
    }
}

runMigration();