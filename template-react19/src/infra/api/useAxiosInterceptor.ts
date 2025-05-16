import { useEffect } from 'react';
import { AxiosAuthInstance, AxiosInstance } from '@infra/api/instances.ts';

export default function useAxiosInterceptor() {
  useEffect(() => {
    const authRequestInterceptor = AxiosAuthInstance.interceptors.request.use(
      config => {},
      error => Promise.reject(error),
    );
    const authResponseInterceptor = AxiosAuthInstance.interceptors.response.use(
      config => {},
      error => Promise.reject(error),
    );
    const requestInterceptor = AxiosInstance.interceptors.request.use(
      config => {},
      error => Promise.reject(error),
    );
    const responseInterceptor = AxiosInstance.interceptors.response.use(
      config => {},
      error => Promise.reject(error),
    );

    return () => {
      AxiosAuthInstance.interceptors.request.eject(authRequestInterceptor);
      AxiosAuthInstance.interceptors.response.eject(authResponseInterceptor);
      AxiosInstance.interceptors.request.eject(requestInterceptor);
      AxiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
}
