'use strict';

/**
 * welcometeam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcometeam.welcometeam');
