import { useState, useEffect, useCallback } from 'react';

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const BASE_URL = 'https://619c018e-8f1a-4655-9d77-e3f54ee98121.mock.pstmn.io'
const BASE_URL = 'https://8635-185-48-252-9.ngrok-free.app/api'
console.log(`BASE URL: ${BASE_URL}`)

interface UseFetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: Record<string, unknown> | null;
}

function useFetch<T>(
    endpoint: string,
    options?: UseFetchOptions
): {
    data: T | null;
    error: Error | null;
    loading: boolean;
    refetch: () => Promise<void>;
} {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
        const { method = 'GET', headers, body } = options || {};
        
        const url = `${BASE_URL}${endpoint}`;

        const response = await fetch(url, {
            method,
            headers: {
            'Content-Type': 'application/json',
            ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        } catch (err) {
        setError(err as Error);
        } finally {
        setLoading(false);
        }
}, [endpoint, options]);

useEffect(() => {
    fetchData();
}, [fetchData]);

return { data, error, loading, refetch: fetchData };
}

export default useFetch;
