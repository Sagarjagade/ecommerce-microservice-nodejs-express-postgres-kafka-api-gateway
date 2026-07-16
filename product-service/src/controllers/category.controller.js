
import categoryService from "../services/category.service";
class CategoryController {

    async create(req, res, next) {
        try {

            const category = await categoryService.create(req.body);

            return res.status(201).json({
                success: true,
                message: "Category created successfully",
                data: category,
            });

        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {

            const categories = await categoryService.getAll();

            return res.status(200).json({
                success: true,
                data: categories,
            });

        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {

            const category = await categoryService.getById(req.params.id);

            return res.status(200).json({
                success: true,
                data: category,
            });

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {

            const category = await categoryService.update(
                req.params.id,
                req.body
            );

            return res.status(200).json({
                success: true,
                message: "Category updated successfully",
                data: category,
            });

        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {

            await categoryService.delete(req.params.id);

            return res.status(200).json({
                success: true,
                message: "Category deleted successfully",
            });

        } catch (error) {
            next(error);
        }
    }
}
export default new CategoryController();