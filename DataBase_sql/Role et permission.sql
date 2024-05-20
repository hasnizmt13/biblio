CREATE ROLE web_user NOLOGIN;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO web_user;

CREATE ROLE anonymos NOLOGIN;

CREATE ROLE web_anon NOLOGIN;
GRANT USAGE ON SCHEMA public TO web_anon;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO web_anon;
GRANT INSERT ON ALL TABLES IN SCHEMA public TO web_anon;
GRANT UPDATE ON ALL TABLES IN SCHEMA public TO web_anon;
GRANT DELETE ON ALL TABLES IN SCHEMA public TO web_anon;
GRANT USAGE, SELECT ON SEQUENCE reservations_id_seq TO web_anon;
GRANT USAGE, SELECT ON SEQUENCE livres_id_seq TO web_anon;
GRANT USAGE, SELECT ON SEQUENCE utilisateurs_id_seq TO web_anon;
GRANT USAGE, SELECT ON SEQUENCE emprunts_id_seq TO web_anon;
GRANT USAGE, SELECT ON SEQUENCE historique_id_seq TO web_anon;

