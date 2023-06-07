export interface IDimensions {
    width: string;
    height: string,
    thickness: string,
    unit: string
}

export interface IFrameDetails {
    code: string,
    shape: string,
    material: string,
    colour: string,
    dimensions: IDimensions,
    isCustomizable: boolean,
    availableShapes: string
}
export interface IProduct {
    id: string;
    image: string;
    title: string;
    price: number;
    alt: string;
    discount: number;
    discountable: boolean,
    discountedPrice: number;
    discountPercentage: number;
    brand: string;
    category: string,
    color: string,
    isCustomizable: boolean,
    dimensions: IDimensions,
    isFramed: boolean,
    frameDetails: IFrameDetails,
    description: string,
    qty:number
}

export interface ImageProps {
    image: string;
    images: string[];
}

export type SelectTypes ={
    label:string;
    value:string;
}