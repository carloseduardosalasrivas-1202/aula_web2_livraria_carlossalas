CREATE TABLE [autores] (
	[id] int IDENTITY(1, 1),
	[nome] varchar(100) NOT NULL,
	[email] varchar(255) NOT NULL,
	[criado em] datetime NOT NULL CONSTRAINT [autores_criado em_default] DEFAULT (getdate()),
	CONSTRAINT [autores_pkey] PRIMARY KEY([id]),
	CONSTRAINT [autores_email_key] UNIQUE([email])
);
