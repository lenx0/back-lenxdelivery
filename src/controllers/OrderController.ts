import { Request, Response } from "express";
import OrderSchema from "../schemas/OrderSchema";

class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const orders = await OrderSchema.create(req.body);
      console.log("CREATE");
      return res.send(orders);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  // async findOrder(req: Request, res: Response) {
  //   try {
  //     const orders = await OrderSchema.find(req.body);
  
  //     console.log("Pedidos listados:", orders);
  
  //     console.log("LIST");
  //     return res.send(orders);
  //   } catch (err) {
  //     return res.status(400).send({ error: err });
  //   }
  // }

  async findOrder(req: Request, res: Response) {
    try {
      // Filtra os pedidos para não incluir os "delivered"
      const orders = await OrderSchema.find({ status: { $ne: 'delivered' } });
    
      console.log("Pedidos listados:", orders);
    
      console.log("LIST");
      return res.send(orders);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async findOrderById(req: Request, res: Response) {
    try {
      const orders = await OrderSchema.find({ _id: req.params.id });
      return res.send(orders);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const orderId = req.params._id;
      const updatedOrder = await OrderSchema.findByIdAndUpdate(orderId, req.body, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).send({ error: 'Pedido não encontrado.' });
      }
  
      return res.send(updatedOrder);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      const orderId = req.params.id;
      
      const updatedOrder = await OrderSchema.findByIdAndUpdate(
        orderId,
        { status: "delivered" },
        { new: true }
      );
  
      if (!updatedOrder) {
        return res.status(404).send({ error: 'Pedido não encontrado.' });
      }
  
      return res.send(updatedOrder);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  // async updateOrderStatus(req: Request, res: Response) {
  //   try {
  //     const orderId = req.params.id;
      
  //     const updatedOrder = await OrderSchema.findByIdAndUpdate(
  //       orderId,
  //       { status: "delivered" },
  //       { new: true }
  //     );
  
  //     if (!updatedOrder) {
  //       return res.status(404).send({ error: 'Pedido não encontrado.' });
  //     }
  
  //     // Remove o pedido do banco de dados
  //     await updatedOrder.remove();
  
  //     return res.send({ message: 'Pedido entregue e removido com sucesso.' });
  //   } catch (err) {
  //     return res.status(400).send({ error: err });
  //   }
  // }

  async deleteOrder(req: Request, res: Response) {
    try {
      const orders = await OrderSchema.findByIdAndDelete(req.params._id);
      return res.send();
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }
}

export default OrderController;
