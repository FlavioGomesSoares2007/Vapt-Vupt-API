import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { StoresEntity } from '../stores/entities/Stores.Entity';
export declare class AuthService {
    private readonly jwtService;
    private readonly storesRepositorio;
    constructor(jwtService: JwtService, storesRepositorio: Repository<StoresEntity>);
    login(password: string, email: string): Promise<{
        access_token: string;
    }>;
}
