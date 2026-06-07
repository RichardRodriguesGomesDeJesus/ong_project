markdown_content = """# 🏢 Sistema de Gestão para ONG - Controle de Doações e Inventário

Este repositório contém a estrutura técnica inicial e o protótipo funcional mínimo do Sistema de Gestão de Doações, desenvolvido como parte da transição entre as fases de design e implementação de software dentro da arquitetura MVC.

---

## 👥 Integrantes do Grupo

- **Richard Rodrigues** - Desenvolvedor/Analista do Projeto

---

## 🎯 Objetivo do Sistema

O sistema tem como finalidade fornecer uma plataforma web centralizada para a gestão administrativa de Organizações Não Governamentais (ONGs). A ferramenta automatiza o controle de inventário (entradas de alimentos e materiais de limpeza, saídas de suprimentos) e monitora de forma ativa o engajamento de colaboradores. Um dos grandes diferenciais do sistema é a lógica de negócio voltada à emissão de alertas e relatórios automáticos indicando **doadores inativos há mais de 30 dias**, facilitando ações estratégicas de reengajamento e captação de recursos.

---

## 🧩 Módulo Escolhido para o Protótipo

- **Módulo de Autenticação e Controle de Acesso (Tela de Login)**
  Escolheu-se a interface de login por ser a porta de entrada indispensável para garantir a governança dos dados e a validação das camadas de segurança baseadas em diferentes níveis de permissão (Administrador vs. Operador).

---

## 📋 Requisitos Atendidos pelo Protótipo

- **RF01 - Autenticar Acesso:** Interface funcional para inserção de credenciais de usuários, validação estática de formato de e-mail e tratamento visual de erros de digitação.
- **RF02 - Gerenciar Permissões:** Estruturação visual e lógica inicial preparada para redirecionar o usuário com base em seu respectivo nível de acesso (Admin ou Operador).

---

## 🛠️ Tecnologias Utilizadas

- **Ambiente de Execução (Runtime):** Deno
- **Biblioteca Principal:** React.js (v18.3.1)
- **Ferramenta de Build / Bundler:** Vite (v6.3.5)
- **Linguagem:** TypeScript
- **Framework de Estilização:** Tailwind CSS (v4.1.12)
- **Componentes de Interface (Headless):** Radix UI & Material UI (MUI)
- **Gerenciador de Pacotes:** pnpm / Deno package management

---

## 📁 Explicação da Estrutura do Projeto

A arquitetura geral do projeto segue o padrão **MVC (Model-View-Controller)** de forma desacoplada. O diretório atual foca primordialmente na camada de visualização (**View**), isolando os elementos de interface e preparando as conexões para o consumo da API.
