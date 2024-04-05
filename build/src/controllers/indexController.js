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
Object.defineProperty(exports, "__esModule", { value: true });
const path = '../src/views/';
const jsonValidate = (response, message, exito = true) => { };
class IndexC {
    welcome(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.render(`${path}indexView`, {
                    parameter: 'Rommel Antonio'
                });
            }
            catch (err) {
                response.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = IndexC;
//# sourceMappingURL=indexController.js.map