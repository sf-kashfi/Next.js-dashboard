// @mui
import { Container, Box } from '@mui/material';
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function LoadingShop() {
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
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </Box>
        </Container>
    );
}
