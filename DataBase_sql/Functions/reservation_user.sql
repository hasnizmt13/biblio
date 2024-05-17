-- FUNCTION: public.reservations_user(integer)

-- DROP FUNCTION IF EXISTS public.reservations_user(integer);

CREATE OR REPLACE FUNCTION public.reservations_user(
	id_ut integer)
    RETURNS TABLE(id integer, id_livre integer, titre character varying, date_reservation date, statut character varying) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT reservations.id, livres.id , livres.titre, reservations.date_reservation, reservations.statut
    FROM reservations
    JOIN livres ON reservations.id_livre = livres.id
    WHERE reservations.id_utilisateur = id_ut
    ORDER BY reservations.date_reservation DESC;
END;
$BODY$;

ALTER FUNCTION public.reservations_user(integer)
    OWNER TO postgres;
