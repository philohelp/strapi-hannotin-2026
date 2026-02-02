'use strict';

/**
 * welcomeactu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcomeactu.welcomeactu');
