import ColtonPict from './Images/image-colton.jpg';
import IrenePict from './Images/image-irene.jpg';
import AnnePict from './Images/image-anne.jpg';

export const RATINGS = [
    {
        rate: 5,
        from: 'Reviews',
    },
    {
        rate: 3,
        from: 'Report Guru',
    },
    {
        rate: 4,
        from: 'BestTech',
    },
];

export const REVIEWS = [
    {
        id: 1,
        picture: ColtonPict,
        fullName: 'Colton Smith',
        status: 'Verified Buyer',
        review: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
    },
    {
        id: 2,
        picture: IrenePict,
        fullName: 'Irene Roberts',
        status: 'Verified Buyer',
        review: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    },
    {
        id: 3,
        picture: AnnePict,
        fullName: 'Anne Wallace',
        status: 'Verified Buyer',
        review: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
    },
];
