'use strict';

/**
 * actu service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::actu.actu');
