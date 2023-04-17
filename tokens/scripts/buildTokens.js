const baseConfig = require('../src/config');
const stringifyTokens = require('./stringifyTokens');
const StyleDictionary = require('style-dictionary');

const generator = StyleDictionary.extend(baseConfig);

generator.buildAllPlatforms();

stringifyTokens();

