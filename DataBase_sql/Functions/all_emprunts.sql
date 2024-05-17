-- FUNCTION: public.all_emprunts(jsonb)

-- DROP FUNCTION IF EXISTS public.all_emprunts(jsonb);

CREATE OR REPLACE FUNCTION public.all_emprunts(
	args jsonb DEFAULT '{}'::jsonb)
    RETURNS TABLE(id integer, id_user integer, id_livre integer, nom character varying, titre character varying, date_emprunt date, date_retour_prevue date) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT 
        emprunts.id, 
        utilisateurs.id AS id_user, 
        livres.id AS id_livre, 
        utilisateurs.nom, 
        livres.titre,
        emprunts.date_emprunt, 
        emprunts.date_retour_prevue
    FROM emprunts
    JOIN livres ON emprunts.id_livre = livres.id
    JOIN utilisateurs ON emprunts.id_utilisateur = utilisateurs.id
    ORDER BY emprunts.date_emprunt DESC;
END;
$BODY$;

ALTER FUNCTION public.all_emprunts(jsonb)
    OWNER TO postgres;

GRANT EXECUTE ON FUNCTION public.all_emprunts(jsonb) TO PUBLIC;

GRANT EXECUTE ON FUNCTION public.all_emprunts(jsonb) TO postgres;

GRANT EXECUTE ON FUNCTION public.all_emprunts(jsonb) TO web_anon;

