# autenticacao-api

API de autenticação JWT com NestJS

Essa API tem o intuito apenas a realização de testes e estudos

# Execução

Para executar a api: npm run dev
Para executar os testes: npm run test

URL para testes: http://localhost:3000
Abrir o swagger: http://localhost:3000/api-docs/

# Configurações

No arquivo .env, ajuste as configurações de conexão com o Banco de Dados

# Scripts para criação do banco de dados (MySQL)

CREATE DATABASE IF NOT EXISTS meubanco;

USE meubanco;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
