const express = require('express')
const router = express.Router()
const {getFrontendRoadmap, searchRoadmap} = require('./../controller/roadmapController')

router.route('/').get(getFrontendRoadmap)
router.route('/searchRoadmap').post(searchRoadmap)

module.exports = router