export type category = {
  name: string;
  src: string;
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  skills_learned: string[];
  professor: string;
  hours: number;
  image: string;
  tags: string[];
  certification: string;
};
