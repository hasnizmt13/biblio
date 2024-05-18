-- FUNCTION: public.reservations_user(integer)

-- DROP FUNCTION IF EXISTS public.emprunts_user(integer);

CREATE OR REPLACE FUNCTION public.emprunts_user(
	id_ut integer)
    RETURNS TABLE(id integer, id_livre integer, titre character varying, date_emprunts date, date_retour_prevue date) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT emprunts.id, livres.id , livres.titre, emprunts.date_emprunt, emprunts.date_retour_prevue
    FROM emprunts
    JOIN livres ON emprunts.id_livre = livres.id
    WHERE emprunts.id_utilisateur = id_ut
    ORDER BY emprunts.date_emprunt DESC;
END;
$BODY$;

ALTER FUNCTION public.emprunts_user(integer)
    OWNER TO postgres;
