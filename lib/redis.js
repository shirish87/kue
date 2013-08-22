/*!
 * kue - RedisClient factory
 * Copyright (c) 2011 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 * Author: bitprobe@gmail.com
 */

/**
 * Module dependencies.
 */

var redis = require('redis');

/**
 * Create a RedisClient.
 *
 * @return {RedisClient}
 * @api private
 */

exports.createClient = function(){
  return redis.createClient();
};

/**
 * Create or return the existing RedisClient.
 *
 * @return {RedisClient}
 * @api private
 */

exports.client = function(){
  return exports._client || (exports._client = exports.createClient());
};

/**
 * Return the pubsub-specific redis client. 
 *
 * @return {RedisClient}
 * @api private
 */

exports.pubsubClient = function(){
  return exports._pubsub || (exports._pubsub = exports.createClient());
};


/**
 * Sets the namespace for operations through this redis client
 *
 * @api private
 */

exports.setNamespace = function(namespace){
  this.namespace = namespace;
};



/**
 * Prefixes the key with a namespace string, if specified
 *
 * @return {String}
 * @api private
 */

exports.key = function(key){
  if(!this.namespace)   return key;
  return key.replace(/^q:/, this.namespace + ':');
};