import { categories, ingredients, products } from "./constants";
import {prisma} from "./prisma-client";
import {hashSync} from 'bcrypt'

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.ru',
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.ru',
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ]
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.product.createMany({
        data: products,
    });

    await prisma.ingredient.createMany({
        data: ingredients,
    });

    const Сappuccino = await prisma.product.create({
        data: {
            name: 'Каппучино',
            imageUrl: '',
            categoryId: 5,
            ingredients: {
                connect: ingredients.slice(0,1),
            },
        },
    });
    const Raf = await prisma.product.create({
        data: {
            name: 'Раф',
            imageUrl: '',
            categoryId: 5,
            ingredients: {
                connect: ingredients.slice(1,2),
            },
        },
    });
    const Latte = await prisma.product.create({
        data: {
            name: 'Латте',
            imageUrl: '',
            categoryId: 5,
            ingredients: {
                connect: ingredients.slice(2,4),
            },
        },
    });
    const RasTeaCranBar = await prisma.product.create({
        data: {
            name: 'Чай малина с клюквой и барбарисом',
            imageUrl: '',
            categoryId: 4,
            ingredients: {
                connect: ingredients.slice(4,5),
            },
        },
    });

//////////////виды Каппучино
    await prisma.productItem.createMany({
        data: [
            {
                productId: Сappuccino.id,
                price: 200,
                size: 300,
            },
            {
                productId: Сappuccino.id,
                price: 250,
                size: 450,
            },
            {
                productId: Сappuccino.id,
                price: 300,
                size: 600,
            },
////////////////виды Раф
            {
                productId: Raf.id,
                price: 180,
                size: 300,
            },
            {
                productId: Raf.id,
                price: 230,
                size: 450,
            },
            {
                productId: Raf.id,
                price: 280,
                size: 600,
            },
/////////////////виды Латте
            {
                productId: Latte.id,
                price: 190,
                size: 300,
            },
            {
                productId: Latte.id,
                price: 240,
                size: 450,
            },
            {
                productId: Latte.id,
                price: 290,
                size: 600,
            },
/////////////////виды Чай малина с клюквой и барбарисом
            {
                productId: RasTeaCranBar.id,
                price: 220,
                size: 300,
            },
            {
                productId: RasTeaCranBar.id,
                price: 290,
                size: 450,
            },
            {
                productId: RasTeaCranBar.id,
                price: 320,
                size: 600,
            },

        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22222',
            },
        ]
    });
    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id:1 }, { id:2 }, { id:3 }]
            },
        },
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});