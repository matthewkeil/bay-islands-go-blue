import * as path from 'path';



export const ROOT = path.resolve(__dirname);

export const root = (...segments: string[]): string => {
    return path.resolve(ROOT, ...segments);
};

export const SRC = root('src');

export const BUILD = root('.build');

export const ASSETS = root('../../client/src/assets');

