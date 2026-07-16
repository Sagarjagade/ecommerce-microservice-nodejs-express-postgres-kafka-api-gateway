
import productService from "../services/product.service";
class ProductController {

    async create(req, res, next) {
        try {

            const product = await productService.create(req.body);

            return res.status(201).json({
                success: true,
                message: "Product created successfully",
                data: product,
            });

        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {

            const products = await productService.getAll();

            return res.status(200).json({
                success: true,
                data: products,
            });

        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {

            const product = await productService.getById(req.params.id);

            return res.status(200).json({
                success: true,
                data: product,
            });

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {

            const product = await productService.update(
                req.params.id,
                req.body
            );

            return res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product,
            });

        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {

            await productService.delete(req.params.id);

            return res.status(200).json({
                success: true,
                message: "Product deleted successfully",
            });

        } catch (error) {
            next(error);
        }
    }
}
export default new ProductController();