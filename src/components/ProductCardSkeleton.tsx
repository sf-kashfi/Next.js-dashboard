"use client";

import { Card, CardContent, Skeleton } from "@mui/material";

export default function ProductCardSkeleton() {
    return (
        <Card sx={{ borderRadius: 3, height: "100%" }}>
            <Skeleton
                variant="rectangular"
                height={180}
                sx={{ borderRadius: 2, margin: 2 }}
            />

            <CardContent>
                <Skeleton width="80%" height={20} />
            </CardContent>
        </Card>
    );
}
