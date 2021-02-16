export interface Question {
  no: number;
  type: number;
  title: string;
  choices?: { no: number; label: string }[];
}
