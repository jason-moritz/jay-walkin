import { Router } from "express";
import * as controllers from "../controllers/users.js";
import restrict from "../helpers/restrict.js";


const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.post("/change-password", restrict, controllers.changePassword);
router.post("/add-to-cart", restrict, controllers.addToCart);
router.get("/view-cart", restrict, controllers.viewCart)
router.get('/users/:id', controllers.getUser);

export default router;
