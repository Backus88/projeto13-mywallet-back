import Joi from 'joi';
import joi_date from '@joi/date';

const joi = Joi.extend(joi_date);

const walletSchema = joi.object({
    description: joi.string().min(3).max(20).required(),
    value: joi.number().required(),
    date: joi.date().format('DD/MM'),
});

export default walletSchema;
