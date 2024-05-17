-- FUNCTION: public.all_historique(jsonb)

-- DROP FUNCTION IF EXISTS public.all_historique(jsonb);

CREATE OR REPLACE FUNCTION public.all_historique(
	args jsonb DEFAULT '{}'::jsonb)
    RETURNS TABLE(id integer, id_user integer, id_livre integer, nom character varying, titre character varying, date_emprunt date, date_retour_reelle date) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT 
        historique.id, 
        utilisateurs.id AS id_user, 
        livres.id AS id_livre, 
        utilisateurs.nom, 
        livres.titre,
        historique.date_emprunt, 
		historique.date_retour_reelle
    FROM historique
    JOIN livres ON historique.id_livre = livres.id
    JOIN utilisateurs ON historique.id_utilisateur = utilisateurs.id
    ORDER BY historique.date_retour_reelle DESC;
END;
$BODY$;

ALTER FUNCTION public.all_historique(jsonb)
    OWNER TO postgres;

GRANT EXECUTE ON FUNCTION public.all_historique(jsonb) TO PUBLIC;

GRANT EXECUTE ON FUNCTION public.all_historique(jsonb) TO postgres;

GRANT EXECUTE ON FUNCTION public.all_historique(jsonb) TO web_anon;

