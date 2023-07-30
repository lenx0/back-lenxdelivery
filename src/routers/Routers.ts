import { Router } from 'express';
import DishController from '../controllers/DishController';
import OrderController from '../controllers/OrderController';

const dishController = new DishController();
const orderController = new OrderController();
const mainRouter = Router();

mainRouter.post("/dish/create/", dishController.createDish);
mainRouter.get("/dish/list/", dishController.findDish);
mainRouter.post("/dish/list/:_id", dishController.findDishById);
mainRouter.put("/dish/update/:_id", dishController.updateDish);
mainRouter.delete("/dish/delete/:_id", dishController.deleteDish);

mainRouter.post("/order/create/", orderController.createOrder);
mainRouter.get("/order/list/", orderController.findOrder);
mainRouter.post("/order/list/:_id", orderController.findOrderById);
mainRouter.put("/order/update/:_id", orderController.updateOrder);
mainRouter.delete("/order/delete/:_id", orderController.deleteOrder);





export default mainRouter;
