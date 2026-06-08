export interface WordDetailsResponse {
  word: string;
  exists: boolean;

  lemma: string | null;
  length: number | null;
  category: string | null;

  definitions: string[];

  fetchedAt: string;
}