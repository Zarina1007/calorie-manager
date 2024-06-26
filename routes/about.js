const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

/**
 * @swagger
 * /about:
 *   get:
 *     summary: Get information about the developers
 *     description: Retrieve a list of developers with their firstname, lastname, id, and email.
 *     responses:
 *       200:
 *         description: Successfully retrieved developers' information.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                     example: "dave"
 *                   lastname:
 *                     type: string
 *                     example: "cohen"
 *                   id:
 *                     type: integer
 *                     example: 234234
 *                   email:
 *                     type: string
 *                     example: "daddd@gmail.com"
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
router.get('/', aboutController.getAboutInfo);

module.exports = router;
