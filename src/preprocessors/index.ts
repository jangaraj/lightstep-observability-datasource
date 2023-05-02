import { DataFrame } from '@grafana/data';
import { LightstepQuery, QueryRes, QueryServiceMapRes } from '../types';
import { preprocessTimeseries, preprocessNodesEdges } from './timeseries';

/**
 * Preprocessor entry point routes responses to the correct preprocessor
 */
export function preprocessData(res: QueryRes, query: LightstepQuery, notebookURL: string): DataFrame {
  return preprocessTimeseries(res, query, notebookURL);
}

export function preprocessServiceMap(res: QueryServiceMapRes, query: LightstepQuery, notebookURL: string): DataFrame {
  return preprocessNodesEdges(res, query, notebookURL);
}
