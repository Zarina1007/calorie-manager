const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Get Monthly Calorie Report By month, year and user_id
 *     description: Retrieve the monthly report of calories consumed by a user.
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *         example: 1
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: Year for the report
 *         example: 2024
 *       - in: query
 *         name: month
 *         schema:
 *           type: integer
 *         required: true
 *         description: Month for the report
 *         example: 5
 *     responses:
 *       200:
 *         description: A JSON object containing the monthly calorie report.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 breakfast:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: integer
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                         format: float
 *                 lunch:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: integer
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                         format: float
 *                 dinner:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: integer
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                         format: float
 *                 other:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: integer
 *                       description:
 *                         type: string
 *                       amount:
 *                         type: number
 *                         format: float
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/', reportController.getMonthlyReport);

module.exports = router;
