export interface Project {
    _id: string;
    name: string;
    description:string;
    finishDate: Date;
    images: string[]
    createdAt: Date;
    updatedAt: Date;
}