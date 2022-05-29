import Joi from 'joi';

const order = Joi.object({
  productsIds: Joi.array()
    .required(),
});

export default order;