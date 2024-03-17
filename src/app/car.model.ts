export type carColor = {
    code: string,
    description: string,
    price: number
}

export type carModel = {
    code: string,
    description: string,
    colors: []
}

export type carConfigs = {
    configs: [carConfig];
    towHitch: boolean;
    yoke: boolean;
}

export type carConfig = {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}