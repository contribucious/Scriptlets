/* eslint-disable no-console */
import { stringToFunc } from '../helpers';

/**
 * Logs setInterval calls
 *
 * @param {Source} source
 */
export function logSetInterval(source) {
    const hit = stringToFunc(source.hit);
    const nativeSetInterval = window.setInterval;
    const log = console.log.bind(console);
    function setIntervalWrapper(callback, timeout, ...args) {
        hit();
        log(`setInterval("${callback.toString()}", ${timeout})`);
        return nativeSetInterval.apply(window, [callback, timeout, ...args]);
    }
    window.setInterval = setIntervalWrapper;
}

logSetInterval.names = [
    'log-setInterval',
    'setInterval-logger.js',
];

logSetInterval.injections = [stringToFunc];
