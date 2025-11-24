import axios from 'axios';
// @mui
import {
    Box,
    Card,
    Grid,
    Divider,
    Container,
    Typography,
} from "@mui/material";
//types
import type { Product } from "@/types/product";

async function getProduct(id: string): Promise<Product> {
    const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    return (
        <Container>
            <Card sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6, }}>
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.title}
                            sx={{ width: "100%", borderRadius: 2 }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6, }}>
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>

                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            {product.category}
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            ${product.price}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="body1" paragraph>
                            {product.description}
                        </Typography>

                        <Typography variant="subtitle2" color="text.secondary">
                            ⭐ {product.rating.rate} ({product.rating.count} reviews)
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}
