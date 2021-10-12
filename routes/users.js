import { Router } from "express";
import * as controllers from "../controllers/users.js";
import restrict from "../helpers/restrict.js";


const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.post("/change-password", restrict, controllers.changePassword);
router.post("/users/:id/add-to-cart", restrict, controllers.addToCart);
router.post("/users/:id/remove-from-cart", restrict, controllers.removeFromCart);
router.get('/users/:id', controllers.getUser);

export default router;
