"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const common_1 = require("@nestjs/common");
exports.Token = common_1.createParamDecorator((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers.authorization;
    if (auth === undefined) {
        throw new common_1.UnauthorizedException('Пользователь не авторизован');
    }
    const bearer = auth.split(' ')[0];
    const token = auth.split(' ')[1];
    if (!bearer || !token) {
        return { token: null };
    }
    return { token };
});
//# sourceMappingURL=token.decorator.js.map