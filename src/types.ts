type method = 'get' | 'post';

type config = {
    method: method,
    endpoint: string,
    body: any,
};

export default config