SET search_path TO public;
DROP EXTENSION IF EXISTS "uuid-ossp";

CREATE EXTENSION "uuid-ossp" SCHEMA public;

CREATE TABLE IF NOT EXISTS public.devices
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    unique_device_name character varying COLLATE pg_catalog."default" NOT NULL,
    unique_secret_token character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY (id),
    CONSTRAINT "UQ_3750c701f928b16e6ed69b7c300" UNIQUE (unique_secret_token),
    CONSTRAINT "UQ_4e262282d4c38f74a9224185f32" UNIQUE (unique_device_name)
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.devices
    OWNER to gps;

INSERT INTO public.devices(
	id, created_at, updated_at, unique_device_name, unique_secret_token)
	VALUES ('fe914c68-c146-4b07-b5a0-3504763893df', NOW(), NOW(), 'device', 'token');


    -- Table: public.logs

-- DROP TABLE IF EXISTS public.logs;

CREATE TABLE IF NOT EXISTS public.logs
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    "deviceId" uuid,
    CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY (id),
    CONSTRAINT "FK_be1ca91d63bcd4aadd61c9b5b97" FOREIGN KEY ("deviceId")
        REFERENCES public.devices (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logs
    OWNER to gps;