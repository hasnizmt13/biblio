-- FUNCTION: public.historiques_user(integer)

-- DROP FUNCTION IF EXISTS public.historiques_user(integer);

CREATE OR REPLACE FUNCTION public.historiques_user(
	id_ut integer)
    RETURNS TABLE(id integer, id_livre integer, titre character varying, date_emprunt date, date_retour_reelle date) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT historique.id, livres.id , livres.titre, historique.date_emprunt, historique.date_retour_reelle
    FROM historique
    JOIN livres ON historique.id_livre = livres.id
    WHERE historique.id_utilisateur = id_ut
    ORDER BY historique.date_emprunt DESC;
END;
$BODY$;

ALTER FUNCTION public.historiques_user(integer)
    OWNER TO postgres;
