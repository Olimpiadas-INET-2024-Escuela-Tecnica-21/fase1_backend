import {z} from 'zod';

export default z.object({
    name : z.string().min(3).max(255),
    category : z.string().min(3).max(255),
    stock : z.number().int().positive(),
    price : z.number().finite().positive(),
    description : z.string().min(3).max(255),
});