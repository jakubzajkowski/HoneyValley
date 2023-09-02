"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../prisma/db"));
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    try {
        const user = yield db_1.default.user.findFirst({ where: { email: email } });
        if (!user) {
            throw 'User not found!';
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            throw 'Invalid password!';
        }
        const token = jsonwebtoken_1.default.sign({ user }, process.env.JWT_SECRET_TOKEN, {
            expiresIn: process.env.JWT_SECRET_TOKEN_EXPIRES,
        });
        return res.status(200).json({ success: 'Logged Successful', token: token });
    }
    catch (error) {
        return res.status(401).json({ error: error });
    }
});
exports.default = LoginController;
