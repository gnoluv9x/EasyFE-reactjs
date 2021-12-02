import productApi from 'api/productsApi';
import { useEffect, useState } from 'react';

export default function useFetchProductData(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            (async () => {
                const result = await productApi.get(productId);
                setProduct(result);

                setLoading(false);
            })();
        } catch (error) {
            console.log('Failed to fetch product', error);
        }
    }, [productId]);

    return { product, loading };
}
