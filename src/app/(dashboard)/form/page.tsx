"use client";

import { useForm, Controller } from "react-hook-form";
//mui
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
} from "@mui/material";
//types
type ProductFormValues = {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export default function AddProductPage() {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ProductFormValues>({
        defaultValues: {
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
        },
    });

    const onSubmit = async (data: ProductFormValues) => {
        console.log(data)
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Add Product
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Title is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Title"
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="price"
                    control={control}
                    rules={{
                        required: "Price is required",
                        min: { value: 0.01, message: "Price must be positive" },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Price"
                            type="number"
                            error={!!errors.price}
                            helperText={errors.price?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Description"
                            multiline
                            rows={4}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Category"
                            error={!!errors.category}
                            helperText={errors.category?.message}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="image"
                    control={control}
                    rules={{ required: "Image URL is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Image URL"
                            error={!!errors.image}
                            helperText={errors.image?.message}
                            fullWidth
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Add Product
                </Button>
            </Box>
        </Container>
    );
}
