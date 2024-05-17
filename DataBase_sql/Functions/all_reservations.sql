-- FUNCTION: public.all_reservations(jsonb)

-- DROP FUNCTION IF EXISTS public.all_reservations(jsonb);

CREATE OR REPLACE FUNCTION public.all_reservations(
	args jsonb DEFAULT '{}'::jsonb)
    RETURNS TABLE(id integer, id_user integer, id_livre integer, nom character varying, titre character varying, date_reservation date, statut character varying) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT 
        reservations.id, 
        utilisateurs.id AS id_user, 
        livres.id AS id_livre, 
        utilisateurs.nom, 
        livres.titre,
        reservations.date_reservation, 
        reservations.statut
    FROM reservations
    JOIN livres ON reservations.id_livre = livres.id
    JOIN utilisateurs ON reservations.id_utilisateur = utilisateurs.id
    ORDER BY reservations.date_reservation DESC;
END;
$BODY$;

ALTER FUNCTION public.all_reservations(jsonb)
    OWNER TO postgres;

GRANT EXECUTE ON FUNCTION public.all_reservations(jsonb) TO PUBLIC;

GRANT EXECUTE ON FUNCTION public.all_reservations(jsonb) TO postgres;

GRANT EXECUTE ON FUNCTION public.all_reservations(jsonb) TO web_anon;

