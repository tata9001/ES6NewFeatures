'use strict'
//  普通引入
import {lastName,multiply,Point} from './13export.js';
// 整体引入
//import * from './13export.js';
// 默认引入
import defaultExport from './13export.js';
console.log('lastName:' + lastName);
console.log('multiply(4,9)=' + multiply(4,9));
console.log('Point:' + new Point(1,3))
defaultExport();
