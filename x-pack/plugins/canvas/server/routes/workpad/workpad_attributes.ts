/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { CanvasWorkpad } from '../../../../../legacy/plugins/canvas/types';

export type WorkpadAttributes = Pick<CanvasWorkpad, Exclude<keyof CanvasWorkpad, 'id'>> & {
  '@timestamp': string;
  '@created': string;
};
