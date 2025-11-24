"use client";

import Link from 'next/link';
import NextImage from 'next/image';
// @mui
import { Box, Card, Link as MuiLink, Typography, Stack, CardContent } from '@mui/material';
//types
import type { Product } from '@/types/product';


interface ShopProductCardProps {
    product: Product;
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
    const { id, title, image } = product;
    const linkTo = `/shop/product/${id}`;

    return (
        <Card sx={{ borderRadius: 3, height: "100%" }}>
            <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
                <NextImage
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>

            <CardContent>

                <MuiLink component={Link} href={linkTo} color="inherit" underline="none">
                    <Typography variant="subtitle2" noWrap>
                        {title}
                    </Typography>
                </MuiLink>

            </CardContent>
        </Card>
    );
}