import axios from 'axios';
// @mui
import { Container, Box } from '@mui/material';
import ShopProductCard from '@/components/ShopProductCard';
//types
import type { Product } from '@/types/product';

async function getProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
}

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <Container>
            <Box
                sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    },
                }}
            >
                {products.map((product) => (
                    <ShopProductCard key={product.id} product={product} />
                ))}
            </Box>
        </Container>
    );
}
