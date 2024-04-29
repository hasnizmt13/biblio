
-- Database: bibliotheque

-- DROP DATABASE IF EXISTS bibliotheque;
CREATE DATABASE bibliotheque
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


	-- Ensuite, connectez-vous à la base de données bibliotheque et exécutez le reste du script pour créer les tables
	CREATE TABLE livres (
		id SERIAL PRIMARY KEY,
		titre VARCHAR(255),
		auteur VARCHAR(255),
		année_publication INT,
		genre VARCHAR(100),
		isbn VARCHAR(20),
		disponible BOOLEAN DEFAULT true,
		nombre_pages INT,
		description TEXT,
		photo VARCHAR(255)  -- URL de l'image du livre
	);

	CREATE TABLE emprunts (
		id SERIAL PRIMARY KEY,
		id_utilisateur INT REFERENCES utilisateurs(id),
		id_livre INT REFERENCES livres(id),
		date_emprunt DATE,
		date_retour_prevue DATE,
		date_retour_reelle DATE
	);

	CREATE TABLE reservations (
		id SERIAL PRIMARY KEY,
		id_utilisateur INT REFERENCES utilisateurs(id),
		id_livre INT REFERENCES livres(id),
		date_reservation DATE,
		statut VARCHAR(100)
	);
	CREATE TABLE utilisateurs (
			id SERIAL PRIMARY KEY,
			nom VARCHAR(255),
			prénom VARCHAR(255),
			email VARCHAR(255),
			rôle VARCHAR(100),
			photo VARCHAR(255)  -- URL de l'image de profil de l'utilisateur
			password_ VARCHAR(255),
		);