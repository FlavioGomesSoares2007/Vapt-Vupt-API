import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadFile(file: any, folder: string): Promise<UploadApiErrorResponse | UploadApiResponse>;
    deleteFile(publicId: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
    extractPublicId(url: string): string;
}
