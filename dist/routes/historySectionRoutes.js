"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historySectionController_1 = require("../controllers/historySectionController");
const router = (0, express_1.Router)();
router.post('/history-sections', historySectionController_1.createHistorySection);
router.get('/history-sections', historySectionController_1.getHistorySections);
router.get('/history-sections/:id', historySectionController_1.getHistorySectionById);
router.put('/history-sections/:id', historySectionController_1.updateHistorySection);
router.delete('/history-sections/:id', historySectionController_1.deleteHistorySection);
exports.default = router;