const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');

/**
 * @swagger
 * /addcalories:
 *   post:
 *     summary: Add a new calorie entry
 *     description: Create a new calorie entry for a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user.
 *                 example: 1
 *               year:
 *                 type: integer
 *                 description: The year of the calorie entry.
 *                 example: 2023
 *               month:
 *                 type: integer
 *                 description: The month of the calorie entry (1-12).
 *                 example: 10
 *               day:
 *                 type: integer
 *                 description: The day of the calorie entry.
 *                 example: 5
 *               description:
 *                 type: string
 *                 description: Description of the calorie intake.
 *                 example: "Lunch at restaurant"
 *               category:
 *                 type: string
 *                 description: Category of the calorie intake.
 *                 example: "breakfast"
 *               amount:
 *                 type: number
 *                 description: Number of calories consumed.
 *                 example: 500
 *     responses:
 *       200:
 *         description: Successfully created a new calorie entry.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: The ID of the user.
 *                   example: 1
 *                 year:
 *                   type: integer
 *                   description: The year of the calorie entry.
 *                   example: 2023
 *                 month:
 *                   type: integer
 *                   description: The month of the calorie entry (1-12).
 *                   example: 10
 *                 day:
 *                   type: integer
 *                   description: The day of the calorie entry.
 *                   example: 5
 *                 description:
 *                   type: string
 *                   description: Description of the calorie intake.
 *                   example: "Lunch at restaurant"
 *                 category:
 *                   type: string
 *                   description: Category of the calorie intake.
 *                   example: "Meal"
 *                 amount:
 *                   type: number
 *                   description: Number of calories consumed.
 *                   example: 500
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */
router.post('/', caloriesController.addCalorie);

module.exports = router;
