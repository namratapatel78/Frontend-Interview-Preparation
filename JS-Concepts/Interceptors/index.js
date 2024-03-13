// Interceptors


// https://blog.bitsrc.io/setting-up-axios-interceptors-for-all-http-calls-in-an-application-71bc2c636e4e


// This could be done with a single interceptor:

let _refreshToken = '';
let _authorizing: Promise<void> | null = null;
const HEADER_NAME = 'Authorization';

axios.interceptors.response.use(undefined, async (error: AxiosError) => {
    if(error.response?.status !== 401) {
        return Promise.reject(error);
    }

    // create pending authorization
    _authorizing ??= (_refreshToken ? refresh : authorize)()
        .finally(() => _authorizing = null)
        .catch(error => Promise.reject(error));

    const originalRequestConfig = error.config;
    delete originalRequestConfig.headers[HEADER_NAME]; // use from defaults

    // delay original requests until authorization has been completed
    return _authorizing.then(() => axios.request(originalRequestConfig));
});