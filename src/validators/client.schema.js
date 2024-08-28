import {z} from 'zod';

export default z.object({
    username : z.string().min(3).max(255),
    password : z.string().min(6).max(255),
    email : z.string().email(),
    address : z.string().min(3).max(255),
});