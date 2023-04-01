export const tryCatch = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
//# sourceMappingURL=tryCatch.js.map