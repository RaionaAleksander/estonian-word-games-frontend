export interface WordDefinitionsResponse {
  word: string;
  count: number;
  randomApplied: boolean;
  definitions: string[];
  fetchedAt: string;
}