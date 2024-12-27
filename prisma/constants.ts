export const categories = [
    {
        name: 'Новинки',
    },
    {
        name: 'Сезонные напитки',
    },
    {
        name: 'Алкогольные напитки',
    },
    {
        name: 'Безалкогольные напитки',
    },
    {
        name: 'Кофейные напитки',
    },
    {
        name: 'Лимонады',
    },
    {
        name: 'Закуски',
    },
];

export const ingredients = [
    {
        name: 'Маршмеллоу',
        price: 40,
        imageUrl: ''
    },
    {
        name: 'Мятный сироп',
        price: 30,
        imageUrl: ''
    },
    {
        name: 'Карамельный сироп',
        price: 30,
        imageUrl: ''
    },
    {
        name: 'Шоколадный сироп',
        price: 30,
        imageUrl: ''
    },
    {
        name: 'Банановый сироп',
        price: 30,
        imageUrl: ''
    },
].map((obj, index) => ({id: index + 1, ...obj}));

export const products = [
    {
        name: 'Осьминог на углях',
        imageUrl: '',
        categoryId: 7,
    },
    {
        name: 'Гренки чесночные',
        imageUrl: '',
        categoryId: 7,
    }
    
]

