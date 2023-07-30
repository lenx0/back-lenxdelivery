import { Request, Response } from "express";
import DishSchema from "../schemas/DishSchema";

class DishController {
  async createDish(req: Request, res: Response) {
    try {
      const dish = await DishSchema.create(req.body);
      console.log("CREATE");
      return res.send(dish);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async findDish(req: Request, res: Response) {
    try {
      const dish = await DishSchema.find(req.body);
      console.log("FIND");
      return res.send(dish);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async findDishById(req: Request, res: Response) {
    try {
      const dish = await DishSchema.find({ _id: req.params.id });
      return res.send(dish);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async updateDish(req: Request, res: Response) {
    try {
      await DishSchema.findByIdAndUpdate(req.params._id, req.body);
      const dish = await DishSchema.findById(req.params._id);
      return res.send(dish);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async deleteDish(req: Request, res: Response) {
    try {
      const dish = await DishSchema.findByIdAndDelete(req.params._id);
      return res.send();
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }
}

export default DishController;
