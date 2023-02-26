import * as Joi from 'joi';

export const createLogInputSchema = Joi.object({
  device_id: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});
