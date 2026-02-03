import { createToaster } from '@chakra-ui/react';

export const toaster = createToaster({
    placement: 'top-start',
    pauseOnPageIdle: true,
});

export const toast = {
    error: (msg: string, description?: string) => {
        return toaster.create({
            title: msg,
            description,
            type: 'error',
        });
    },
    success: (msg: string, description?: string) => {
        return toaster.create({
            title: msg,
            description,
            type: 'success',
        });
    },
    loading: (msg: string, description?: string) => {
        return toaster.create({
            title: msg,
            description,
            type: 'loading',
        });
    },
    info: (msg: string, description?: string) => {
        return toaster.create({
            title: msg,
            description,
            type: 'info',
        });
    },
    update: (
        id: string,
        options: Partial<{
            title: string;
            description: string;
            type: 'info' | 'success' | 'error' | 'loading';
        }>,
    ) => {
        return toaster.update(id, options);
    },
};
