import { AuthService } from './auth.service';
import { AuthDto } from './dto/Auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dados: AuthDto): Promise<{
        access_token: string;
    }>;
}
