import express from 'express';

// Import bus controller
import busController from '../../controllers/admin/bus.controller.js';

// Import auth middleware
import { checkAuth, isAdmin } from '../../middlewares/authCheck.js';

const router = express.Router();

// Route to get all buses
router.get('/', checkAuth, isAdmin, busController.getAllBuses);

// Route to get a single bus
router.get('/:id', checkAuth, isAdmin, busController.getBus);

// Route to add a bus
router.post('/', checkAuth, isAdmin, busController.addBus);

// Route to update a bus
router.put('/:id', checkAuth, isAdmin, busController.updateBus);

// Route to delete a bus
router.delete('/:id', checkAuth, isAdmin, busController.deleteBus);