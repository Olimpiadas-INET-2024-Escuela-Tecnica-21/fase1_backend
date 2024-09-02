import {z} from 'zod';

export default z.object({
    date : z.date(),
    state : z.string().min(3).max(255).optional(),
    totalPrice : z.number().finite().positive(),
    paymentMethod : z.string().min(3).max(255),
});