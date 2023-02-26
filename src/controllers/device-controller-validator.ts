import * as Joi from 'joi';

export const createDeviceInputSchema = Joi.object({
  name: Joi.string().required(),
  token: Joi.string().required(),
});
