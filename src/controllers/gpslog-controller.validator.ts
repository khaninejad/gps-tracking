import * as Joi from 'joi';

export const createLogInputSchema = Joi.object({
  device_id: Joi.string().required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
});
