export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: string;
    // Adicione outros campos conforme necessário
}

export interface ApiResponse {
    products: Product[];
    success: boolean;
}